import { TAddress, TBasicPersonalInfo } from "../common-types";
import { TCustomer } from "../customers/types";

export type TLead = {
  id: string;
  leadSource: number;
  leadStatus: string;
  leadOwner: {
    id:string;
  };
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  rating: number;
  productInterest: any;
  createdByUser: {
    firstName: string;
    lastName: string;
  };
  personalInfo: {
    _id: string;
    lead: string;
    email: string;
    phoneNumber: string;
    gender: number;
    firstName: string;
    lastName: string;
    socialMediaUrl: string;
    __v: number;
  };
  address: TAddress & {
    _id: string;
    lead: string;
    __v: number;
  };
};

export type TLeadBody = {
  rating?: number;
  leadSource?: number;
  leadStatus?: any;
  userId?: string;
  leadOwner?: string;
  productInterest?: any;
  note?: string;
  address?: TAddress;
  personalInfo?: TBasicPersonalInfo & {
    gender?: number;
    dateOfBirth?: Date | string;
    socialMediaUrl?: string;
  };
};

export type TFetchLeadsResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  items: TLead[];
  totalItems: number;
  totalPages: number;
  pageSize: number;
  pageIndex: number;
};

export type TFetchLeadResponse = {
  id: string;
  leadOwner: string;
  leadSource: number;
  leadStatus: any;
  note: string;
  createdBy: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  productInterest: any | null;
  projectInterest: any | null;
  rating: any;
  address: TAddress;
  personalInfo: TBasicPersonalInfo & {
    gender: any;
    dateOfBirth: Date | string;
    socialMediaUrl: string;
  };
  createdByUser?: any;
};

export type TPostLeadAttachmentByIDResponse = {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: string;
  alternativeText: any;
  caption: any;
  ext: string;
  formats: any;
  hash: string;
  height: number;
  width: number;
  mime: string;
  url: string;
  previewUrl: any;
  name: string;
  size: number;
  provider_metadata: any;
  originalName: string;
};

export type TCreateLeadBody = TLeadBody;

export type TCreateLeadResponse = TLead;

export type TUpdateLeadBody = TLeadBody;

export type TUpdateLeadResponse = TLead;

export type TConvertToCustomerResponse = TCustomer;
