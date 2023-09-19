import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@/hooks/useQuery'
import { environment } from '@/configuration'
import { useSearchParams } from 'next/navigation'
import { Countries } from '@/components/Countries/Countries'

const CountriesPage: NextPage = () => {
  const url: string = `${environment.photosURL}`
  const params = useSearchParams()
  const { queryParam } = useQuery()

  return (
    <>
      <Head>
        <title>Next JS | Countries</title>
      </Head>

      <main>
        <h1>Vesrion1-LeftSide</h1>
        <h2>
          <a href="https://www.youtube.com/watch?v=hcp2o1egObw" target="_blank">
            SWR with GraphQl
          </a>
        </h2>
        <Countries />
      </main>
    </>
  )
}

export default CountriesPage
