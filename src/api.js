import Axios from 'axios'

const FHIR_URL = process.env.FHIR_URL || 'https://api.logicahealth.org/PACIO/open/'

async function searchResource (url, params = {}) {
  const response = await Axios.get(url, { params })
  const data = response.data

  if (data && data.resourceType === 'Bundle' && data.entry) {
    const output = data.entry.map(e => e.resource)

    let nextPage
    if (data.link) {
      nextPage = data.link.find(link => link.relation === 'next')
    }

    if (nextPage) {
      const nextPageItems = await searchResource(nextPage.url)
      output.push(...nextPageItems)
    }

    return output
  }

  return []
}

async function getResource (url) {
  // Probably need to catch an error here if the resource is not found.
  const response = await Axios.get(url)
  return response.data
}

const measure = {
  async search (params) {
    const response = await searchResource(`${FHIR_URL}/Measure`, {
      '_count': '50',
      'description:contains': params.text,
    })

    return response
  },

  async getById (id) {
    return getResource(`${FHIR_URL}/Measure/${id}`)
  },
}

export default { measure }
