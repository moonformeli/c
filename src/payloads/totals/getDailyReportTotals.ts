export interface GetDailyReportTotalsPayload {
  active: number;
  confirmed: number;
  critical: number;
  date: string;
  deaths: number;
  recovered: number;
}
