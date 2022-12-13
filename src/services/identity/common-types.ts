export type TAddress = {
  city: string;
  district: string;
  ward: string;
  street: string;
};

export type TBasicPersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
};

export type TPaginate<T> = {
  pageSize: number;
  pageIndex: number;
  items: T[];
  totalItems: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};