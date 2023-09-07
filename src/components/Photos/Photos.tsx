import { useSwr } from '@/hooks'
import { PhotoType } from '@/types/photos'

type Props = {
  url: string
}

export const Photos = ({ url }: Props) => {
  const { data: photos, error } = useSwr(url, 5)

  if (error) return <h2>Something went wrong!</h2>
  if (!photos) return <h2>Loading...</h2>
  return (
    <>
      {photos.map((photo: PhotoType, idx: number) => {
        return (
          <h3 key={idx}>
            <strong>{idx + 1}.</strong> {photo.title}
          </h3>
        )
      })}
    </>
  )
}
