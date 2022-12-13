export type TQuery = {
  value: number;
  fromDate: string;
  toDate: string;
};

export type TAnalyticsResponse = {
  dimension: string;
  entity: string;
  question: string;
  result: {
    query: TQuery;
    queryPrev: TQuery;
    rate: string;
    diff: number;
  };
};

export type TFetchAnalyticsResponse = {
  leads: TAnalyticsResponse;
  customers: TAnalyticsResponse;
  logcalls: TAnalyticsResponse;
  companies: TAnalyticsResponse;
};

export type TAnalyticsBody = {
  fromDate: string;
  toDate: string;
  dimension: string;
  entity: string;
  question: string;
};

export type TConversionRate = {
  leadSourceName: string;
  countLeads: number;
  countLeadConvertedCustomer: number;
  conversionRate: string;
};

export type TConversionRateResponse = {
  dimension: string;
  entity: string;
  question: string;
  result: TConversionRate[];
  total: {
    leadSourceName: string;
    countLeads: number;
    countLeadConvertedCustomer: number;
    conversionRate: string;
  };
};

export type inputAnalytics = {
  dimension:
    | "second"
    | "minute"
    | "hour"
    | "day"
    | "week"
    | "month"
    | "quarter"
    | "year";
  entity: "customers" | "companies" | "leads" | "logcalls";
  question: "new" | "count" | "total-duration" | "conversion-rate";
};

export type TCreateAnalyticsBody = TAnalyticsBody;
