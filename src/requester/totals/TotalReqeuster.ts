import { GetDailyReportTotalsPayload } from '@/payloads/totals/getDailyReportTotals';

import BaseRequester from '../baseRequester';

interface GetDailyReportTotalsConfig {
  dateFormat: string;
  date?: string;
}

export default class TotalRequester extends BaseRequester {
  async getDailyReportTotals({ dateFormat, date }: GetDailyReportTotalsConfig) {
    debugger;
    return await this.call<GetDailyReportTotalsPayload[]>({
      url: '/report/totals',
      proxyUrl: '/api/getDailyReportTotals',
      method: 'get',
      params: {
        date,
        'date-format': dateFormat,
      },
    });
  }
}
