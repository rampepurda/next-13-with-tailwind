import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@/hooks/useQuery'
import { Photos } from '@/components'
import { environment } from '@/configuration'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const PhotosPage: NextPage = () => {
  const url: string = `${environment.photosURL}`
  const params = useSearchParams()
  const { queryParam } = useQuery()

  useEffect(() => {
    const mql = window.matchMedia('(orientation: landscape)')
    const mqs = window.matchMedia('(prefers-color-scheme: dark)')
    //const mql = window.matchMedia('(prefers-color-scheme: dark)')

    mql.addEventListener('change', (event) => {
      if (event.matches) {
        //return alert(`Now in landscape orientation`)
        console.log('Now in landscape orientation')
      } else {
        console.log('Now in portrait orientation')
      }
    })
    mqs.addEventListener('change', (event) => {
      if (event.matches) {
        //return alert(`Now in landscape orientation`)
        console.log('Now in dark scheme')
      } else {
        console.log('undefined')
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | useSearchParams</title>
      </Head>

      <main>
        <h3>query is: name | param is: {queryParam.get('name')}</h3>
        {queryParam.get('name') ? <h2>Parameter was found</h2> : 'false'}

        <h2 className="mb-4">useSWR:</h2>
        <Photos url={url} />
      </main>
    </>
  )
}

export default PhotosPage
