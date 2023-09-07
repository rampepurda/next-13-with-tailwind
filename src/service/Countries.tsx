import { Country } from "@/types/countries";

class CountriesService {
  async getCountry(): Promise<Country[]> {
    //const { data } = await graphQLClient.query<CountriesResponse>({
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    return await res.json();
  }
  /*
    async getCountry(): Promise<Country[]> {
    //const { data } = await graphQLClient.query<CountriesResponse>({
    const { data } = await graphQLClient.query<CountriesResponse>({
      query: GET_COUNTRIES_QUERY,
    });
    return data.countries;
  }
   */
}

export default CountriesService;
