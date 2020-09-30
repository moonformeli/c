import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';

export default class AxiosRequester {
  private host: string = 'https://api.covid19api.com/';

  private isClientError({ status }: { status: number }): boolean {
    return status >= 400 || status < 500;
  }

  protected get Host(): string {
    return this.host;
  }

  protected async get<T>(
    config: Omit<AxiosRequestConfig, 'url'> & { url: string }
  ): Promise<AxiosResponse<T>> {
    const { url } = config;
    const r = await axios.get<T>(url, config);

    if (this.isClientError(r)) {
    }

    return r;
  }
}
