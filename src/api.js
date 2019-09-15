import Axios from 'axios';
import EventEmitter from 'events';
import groupBy from 'lodash.groupby';
import uniqBy from 'lodash.uniqby';

const FHIR_URL = process.env.FHIR_URL || 'https://api.logicahealth.org/PACIO/open/';

const CACHE = {
  data: {},
  get(resource) {
    const key = (resource.resourceType && resource.id) ? `${resource.resourceType}/${resource.id}` : resource;
    return CACHE.data[key];
  },
  put(resource) {
    const key = (resource.resourceType && resource.id) ? `${resource.resourceType}/${resource.id}` : resource;
    CACHE.data[key] = resource;
  },
  clear() {
    CACHE.data = {};
  },
};

class Api {
  constructor(resourceType, transformer) {
    this.resourceType = resourceType;
    this.transformer = transformer;
    this.emitter = new EventEmitter();
  }

  async getResourcesFromBundle(url, params = {}) {
    const response = await Axios.get(url, { params });
    const { data } = response;

    if (data && data.resourceType === 'Bundle' && data.entry) {
      // Add all returned resources to cache, regardless of type.
      // Transform it using the transformer.
      await data.entry.forEach(e => CACHE.put(this.transformer(e.resource)));

      // If the type matches the expected type, add it to the output.
      // Transform it using the transformer.
      const output = await Promise.all(data.entry
        .filter(e => e.resource.resourceType === this.resourceType)
        .map(e => this.transformer(e.resource)));

      // Emit count from this page.
      this.emitter.emit('count', output.length);

      // Load items from next page if we have it.
      if (data.link) {
        const nextPage = data.link.find(link => link.relation === 'next');
        if (nextPage) {
          const nextPageItems = await this.getResourcesFromBundle(nextPage.url);
          output.push(...nextPageItems);
        }
      }

      return output;
    }

    return [];
  }

  async search(params = {}) {
    const newParams = params;
    newParams._count = 50;
    newParams._include = '*';

    const results = await this.getResourcesFromBundle(`${FHIR_URL}/${this.resourceType}`, newParams);
    return results;
  }

  async getById(id) {
    // Handle case where `ResourceType/id` is passed.
    // Strip off the leading `ResourceType/`
    const prefix = `${this.resourceType}/`;
    let resourceId = id;
    if (resourceId.startsWith(prefix)) {
      resourceId = resourceId.slice(prefix.length);
    }

    // If it's in the cache, just return that.
    let resource = CACHE.get(`${this.resourceType}/${resourceId}`);
    if (resource) {
      return resource;
    }

    // Fetch from server and put in cache.
    const response = await Axios.get(`${FHIR_URL}/${this.resourceType}/${resourceId}`);
    resource = await this.transformer(response.data);
    CACHE.put(resource);
    return resource;
  }
}

const API = {
  library: new Api('Library', async (resource) => ({
    resourceType: resource.resourceType,
    id: resource.id,
    name: resource.name,
    title: resource.title,
    status: resource.status,
    version: resource.version,
  })),

  measure: new Api('Measure', async (resource) => {
    async function buildAnswerSets(relatedArtifacts) {
      // Find all documentation artifacts that link to Library/Questionnaire.
      const validArtifacts = (relatedArtifacts || [])
        .filter(a => a.type === 'documentation' && a.resource && a.resource.startsWith('Library/Questionnaire'));

      // Group them by resource. This looks like this:
      //   [
      //     { resource: 'Library/Questionnaire-123', answers: [{ label, display, url }] },
      //     { resource: 'Library/Questionnaire-ABC', answers: [{ label, display, url }] },
      //   ]
      const groupedArtifacts = groupBy(validArtifacts, 'resource');

      // Transform it to a slightly better format with the library resource
      return Promise.all(Object.entries(groupedArtifacts).map(async ([libraryId, answerList]) => ({
        library: await API.library.getById(libraryId),
        answers: answerList.map(answer => ({ label: answer.label, display: answer.display, url: answer.url })),
      })));
    }

    const measure = {
      resourceType: resource.resourceType,
      id: resource.id,
      status: resource.status,
      description: resource.description,
      title: resource.title,
      libraries: [],
      answerSets: [],
    };
    if (resource.library) {
      measure.libraries = await Promise.all(uniqBy(resource.library).map((lib) => API.library.getById(lib)));
    }
    if (resource.relatedArtifact) {
      measure.answerSets = await buildAnswerSets(resource.relatedArtifact);
    }
    return measure;
  }),
};

export default API;
