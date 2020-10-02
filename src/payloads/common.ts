import type { AxiosRequestConfig } from 'axios';
import type { InferGetServerSidePropsType, NextApiRequest } from 'next';

export type PageProps<T> = InferGetServerSidePropsType<T> & {
  lang: string;
};

export type Request = Omit<NextApiRequest, 'query'> & {
  apiKey: string;
  query: any;
};

export type RequesterConfig = AxiosRequestConfig & {
  proxyUrl?: string;
};
