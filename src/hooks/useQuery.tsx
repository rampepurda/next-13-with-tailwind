import { useSearchParams } from 'next/navigation'

export const useQuery = () => {
  const params = useSearchParams()
  const queryParam = params

  return {
    queryParam,
  }
}
