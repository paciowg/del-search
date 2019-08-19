import Axios from 'axios'
import { EventEmitter } from 'events'

const FHIR_URL = process.env.FHIR_URL || 'https://api.logicahealth.org/PACIO/open/'

class Api extends EventEmitter {
  async _getAllResourcesFromBundle (url, params = {}) {
    const response = await Axios.get(url, { params })
    const data = response.data

    if (data && data.resourceType === 'Bundle' && data.entry) {
      const output = data.entry.map(e => e.resource)

      this.emit('count', output.length)

      let nextPage
      if (data.link) {
        nextPage = data.link.find(link => link.relation === 'next')
      }

      if (nextPage) {
        const nextPageItems = await this._getAllResourcesFromBundle(nextPage.url)
        output.push(...nextPageItems)
      }

      return output
    }

    return []
  }

  async _searchResource (params = {}) {
    params._count = 50
    return this._getAllResourcesFromBundle(`${FHIR_URL}/${this.resourceType}`, params)
  }

  async _getById (id) {
    const response = await Axios.get(`${FHIR_URL}/${this.resourceType}/${id}`)
    return response.data
  }
}

class Measure extends Api {
  resourceType = 'Measure'

  async search (params) {
    return this._searchResource({
      'description:contains': params.text,
    })
  }

  async getById (id) {
    return this._getById(id)
  }
}

// const api = new MeasureApi()
// api.on('count', count => console.log('get count!', count))

// async function dostuff () {
//   await api.search({ text: 're' })
// }

// dostuff()

export default { Measure }
