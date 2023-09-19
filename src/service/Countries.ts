import { Country } from '@/types/Countries'
import apolloClient from '@/apollo/graphql-client'
import { GET_COUNTRIES_QUERY } from '@/queries'

type CountriesResponse = {
  countries: Country[]
}
const graphQLClient = apolloClient

class CountriesService {
  async getCountry(): Promise<Country[]> {
    const { data } = await graphQLClient.query<CountriesResponse>({
      query: GET_COUNTRIES_QUERY,
    })
    return data.countries
  }
}

export default new CountriesService()
