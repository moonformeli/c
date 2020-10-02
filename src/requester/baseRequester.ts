import type { Request, RequesterConfig } from '@/payloads/common';

import AxiosRequester from './axiosReqeuster';

export default class BaseRequester extends AxiosRequester {
  constructor(private req?: Request) {
    super();
  }

  private secretKey() {
    if (this.req && process) {
      return this.req.apiKey || process.env.apiKey || '';
    }
    return '';
  }

  private requestedFromServer() {
    return (
      typeof this.req !== 'undefined' &&
      this.req !== null &&
      this.req !== undefined
    );
  }

  private querying(params: object) {
    return Object.keys(params).reduce((query, key) => {
      if (params[key]) {
        if (query.length > 0) {
          query += `&${key}=${params[key]}`;
        } else {
          query += `?${key}=${params[key]}`;
        }
      }

      return query;
    }, '');
  }

  private combineURL(path: string, proxyUrl: string, params: object = {}) {
    const query = this.querying(params);
    const url = this.requestedFromServer()
      ? `${this.Protocol}//${this.Host}/${path}${query}&format=json`
      : `${proxyUrl}`;
    const combined = `${url}`.replace(/([^:]{1})\/{2}/g, '$1/');

    console.log('으럇챠!!');
    console.dir(combined);
    return combined;
  }

  /**
   *
   * @param config
   * @property {!string} url
   * @property {!string} method HTTP-Method, case-insensitive
   * @property {?object} params query-string
   */
  protected async call<T = any>(config: RequesterConfig) {
    const { method, url = '', proxyUrl = '', headers = {}, params } = config;
    const p = {
      ...config,
      headers: {
        'x-rapidapi-host': this.Host,
        'x-rapidapi-key': this.secretKey(),
        ...headers,
      },
      url: this.combineURL(url, proxyUrl, params),
    };

    debugger;

    if (method === 'GET' || method === 'get') {
      return await this.get<T>(p);
    }

    return await Promise.reject();
  }
}
