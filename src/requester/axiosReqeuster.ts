import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class AxiosRequester {
  private protocol: string = 'https:';
  private host: string = 'covid-19-data.p.rapidapi.com';

  private isClientError({ status }: { status: number }): boolean {
    return status >= 400 || status < 500;
  }

  protected get Protocol(): string {
    return this.protocol;
  }

  protected get Host(): string {
    return this.host;
  }

  protected async get<T>(
    config: Omit<AxiosRequestConfig, 'url'> & { url: string }
  ): Promise<AxiosResponse<T>> {
    const { url } = config;
    try {
      const r = await axios.get<T>(url, config);

      if (this.isClientError(r)) {
      }

      return r;
    } catch (e) {
      throw e;
    }
  }
}
