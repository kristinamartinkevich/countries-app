export type Totals = {
  dailyImpressions: number;
  ad_requests: number;
  revenue: number;
}

export type Overtime = {
  date: number;
  impressions: number;
  ad_requests: number;
  revenue: number;
};

export type OvertimeKey = keyof Overtime;



export const colorMap: Record<keyof Overtime, string> = {
  date: "",
  impressions: "#9B00FF",
  ad_requests: "#00BDFF",
  revenue: "#FF9603"
};

export const selectedPropertiesMap: Record<keyof Overtime, string> = {
  date: "",
  impressions: "Impressions",
  ad_requests: "Ad Requests",
  revenue: "Revenue"
}