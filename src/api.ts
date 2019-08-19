import Axios from 'axios'
import { R4 } from '@Ahryman40k/ts-fhir-types'

const FHIR_URL = process.env.FHIR_URL || 'https://api.logicahealth.org/PACIO/open/'

interface ISearchParams {
    text: string
}

const measure = {
  async search (params: ISearchParams): Promise<Array<R4.IMeasure>> {
    const response = await Axios.get(`${FHIR_URL}/Measure`, {
      params: {
        'description:contains': params.text
      }
    })

    // Make sure we got a valid bundle before returning array of results.
    if (response.data && response.data.resourceType === 'Bundle' && response.data.entry) {
      return response.data.entry.map((e: any) => e.resource)
    }

    return []
  }
}

export default { measure }
