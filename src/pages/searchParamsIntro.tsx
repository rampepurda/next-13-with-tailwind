import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@/hooks/useQuery'
import { Photos } from '@/components'

const SearchParams: NextPage = () => {
  const url: string = 'https://jsonplaceholder.typicode.com/photos'
  const { queryParam } = useQuery()

  return (
    <>
      <Head>
        <title>Next JS |useSearchParams</title>
      </Head>

      <main className="theme-a adaptive" style={{ colorScheme: 'dark' }}>
        <h3>query is: name | param is: {queryParam.get('name')}</h3>
        {queryParam.get('name') ? <h2>Parameter was found</h2> : 'false'}

        <h2>useSWR:</h2>
        <Photos url={url} />
      </main>
    </>
  )
}

export default SearchParams
