import { resolve } from 'url';

import { AxiosRequestConfig } from 'axios';

import AxiosRequester from './axiosReqeuster';

export default class BaseRequester extends AxiosRequester {
  private combineURL(path: string) {
    return resolve(this.Host, path);
  }

  protected async call<T>(config: AxiosRequestConfig) {
    const { method, url = '', headers = {} } = config;
    const params = {
      ...config,
      headers,
      url: this.combineURL(url),
    };

    if (method === 'GET' || method === 'get') {
      return await this.get<T>(params);
    }

    return await Promise.reject();
  }
}
