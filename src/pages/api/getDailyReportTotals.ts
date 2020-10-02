import type { Request } from '@/payloads/common';
import TotalReqeuster from '@/requester/totals/TotalReqeuster';
import { camelCase } from '@/utils';
import moment from 'moment';
import type { NextApiResponse } from 'next';

export default async (req: Request, res: NextApiResponse) => {
  debugger;
  const query = req.query || {
    dateFormat: 'YYYY-MM-DD',
    date: moment('2020-09-21').format('YYYY-MM-DD'),
  };
  const requester = new TotalReqeuster(req);
  const r = await requester.getDailyReportTotals(camelCase(query));

  debugger;

  res.status(200).json({ name: 'John Doe' });
};
