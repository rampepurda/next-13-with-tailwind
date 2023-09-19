import style from './Countries.module.scss'

import { Country } from '@/components'
import { Country as country } from '../../types/Countries'
import { useSwrQueries } from '@/hooks/useSwrQueries'
import { useEffect } from 'react'

export const Countries = () => {
  const { data, error } = useSwrQueries()

  useEffect(() => {}, [])

  if (error) return <h2>Something went wrong!</h2>
  if (!data) return <h2>Loading...</h2>

  return (
    <div className={style.card}>
      {data && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}

      {data?.map((country: country, idx: number) => {
        return (
          <div className={style.track} key={idx}>
            <Country {...country} />
          </div>
        )
      })}
    </div>
  )
}
