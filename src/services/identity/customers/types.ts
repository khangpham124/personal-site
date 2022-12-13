import { TAddress, TBasicPersonalInfo } from "../common-types";

export type TCustomer = {
  id: string;
  customerOwner: {
    birthday: string;
    cityId: string;
    description: string;
    id:string;
  },
  leadSource: number;
  projectInterest: {
    name: string;
    id: string;
  };
  saleInCharge: string;
  note: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  workingInfo: {
    _id: string;
    customer: string;
    estimatedIncome: number;
    industry: string;
    position: string;
    budget: number;
    __v: number;
  };
  personalInfo: TBasicPersonalInfo & {
    _id: string;
    customer: string;
    gender: number;
    dateOfBirth: string;
    idType: number;
    idNumber: string;
    socialMediaUrl: string;
    __v: number;
  };
  address: TAddress & {
    _id: string;
    customer: string;
    street: string;
    city: string;
    __v: number;
  };
  createdByUser?: any;
};

export type TCustomerBody = {
  customerOwner: string;
  leadSource: number;
  productInterest?: string;
  note: string;
  address: TAddress;
  createdAt?: string;
  updatedAt?: string;
  personalInfo: TBasicPersonalInfo & {
    gender: number;
    dateOfBirth: Date | string;
    idType: string | number;
    idNumber: string | number;
    socialMediaUrl: string;
  };
  workingInfo: {
    estimatedIncome: number;
    budget: number;
    industry: string;
    position: string;
  };
};

export type TFetchCustomersResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  items: TCustomer[];
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type TFetchCustomerResponse = TCustomer;

export type TCreateCustomerBody = TCustomerBody;

export type TCreateCustomerResponse = TCustomer;

export type TUpdateCustomerBody = TCustomerBody;

export type TUpdateCustomerResponse = TCustomer;
