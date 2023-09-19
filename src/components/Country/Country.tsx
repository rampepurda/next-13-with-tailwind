import { Country as CountryTypes } from '@/types/Countries'

type Props = CountryTypes

export const Country = ({ code, name, native, phone, currency, emoji, emojiU }: Props) => {
  return (
    <>
      <label>Country:</label>
      <h2>{name}</h2>
    </>
  )
}
