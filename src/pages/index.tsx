import type { PageProps } from '@/payloads/common';
import TotalRequester from '@/requester/totals/TotalReqeuster';

const Index = ({ dailyTotals, lang }: PageProps<typeof getServerSideProps>) => {
  return <main>Your user agent</main>;
};

export const getServerSideProps = async ({ req }) => {
  const totalRequester = new TotalRequester(req);

  const r = await totalRequester.getDailyReportTotals({
    dateFormat: 'YYYY-MM-DD',
  });

  return {
    props: {
      dailyTotals: r.data,
    },
  };
};

export default Index;
