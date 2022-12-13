export type TFetchCommentsByIdParams = {
  pageIndex: number;
  pageSize: number;
};

export type TFetchCommentsByIdResponse = {
  items: TComment[];
  pageSize: number;
  pageIndex: number;
  totalItems: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export type TComment = {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: string;
  content: string;
  leadId: string;
  createdByUser: {
    firstName: string;
    lastName: string;
  }
};

export type TItemCustomerComment = {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: string;
  content: string;
  customerId: string;
};

export type TAllCustomerComment = {
  items: TItemCustomerComment[];
  pageSize: number;
  pageIndex: number;
  totalItems: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};
