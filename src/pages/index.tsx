import axios from 'axios';
import { NextPage } from 'next';

import CountryRequester from '../requester/countries/CountryRequester';

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
);

Page.getInitialProps = async ({ req }) => {
  const requester = new CountryRequester();
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  const d = await requester.getAllCountries();

  console.dir(d.data);

  return { userAgent };
};

export default Page;
