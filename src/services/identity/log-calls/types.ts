type TLogCallInfo = {
  minute: number;
  second: number;
  note: string;
  createdAt?: string;
  createdBy?: string;
  createdByUser: {
    firstName?: string;
    lastName?: string;
  }
};

type TLogCall = TLogCallInfo & {
  _id: string;
};

export type TFetchLogCallsResponse = {
  items: TLogCall[];
  pageSize: number;
  pageIndex: number;
  totalItems: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  totalDuration: string;
};

export type TCreateLogCallBody = TLogCallInfo;
