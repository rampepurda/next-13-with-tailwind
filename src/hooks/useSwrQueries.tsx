import useSWR from 'swr'
import { GET_COUNTRIES_QUERY } from '@/queries'
import { Country } from '@/types/Countries'
import apolloClient from '@/apollo/graphql-client'

type CountriesResponse = {
  countries: Country[]
}
const graphQLClient = apolloClient

const fetcher = async () => {
  const { data } = await graphQLClient.query<CountriesResponse>({
    query: GET_COUNTRIES_QUERY,
  })
  return data.countries
}

export const useSwrQueries = () => {
  const { data, error } = useSWR(fetcher)

  return { data, error }
}
