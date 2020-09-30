import { CountriesPayload } from '../../payloads/countries/CountriesPayload';
import BaseRequester from '../baseRequester';

export default class CountryRequester extends BaseRequester {
  async getAllCountries() {
    return await this.call<CountriesPayload[]>({
      url: '/countries',
      method: 'get',
    });
  }
}
