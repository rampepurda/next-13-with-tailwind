import { gql } from '@apollo/client'

export const GET_COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      code
      capital
      name
      native
      phone
      currency
      emoji
      emojiU
    }
  }
`
export const GET_COUNTRY_DETAIL_QUERY = gql`
  query getCountryDetail($code: ID!) {
    country(code: $code) {
      code
      capital
      name
      native
      phone
      currency
      emoji
      emojiU
    }
  }
`
