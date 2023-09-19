import useSWR from 'swr'
import { GET_COUNTRIES_QUERY } from '@/queries'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}

export const useSwr = (url: string, limit: number) => {
  const { data, error } = useSWR(`${url}?_limit=${limit}`, fetcher)

  return { data, error }
}
