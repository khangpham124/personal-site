import { AxiosResponse } from 'axios';

export const API_PREFIX = 'https://api.juclothing.com/api/jusystem';
export const ORDERS_BASE_URL = `/customer/orders`;
export const SHIPPING_BASE_URL = `${API_PREFIX}/external/ghn`;

export interface IError {
  message: string;
  statusCode: number;
  errorCode: string;
}

export interface IOrder {
  createdType: number;
  customerUuid?: string;
  newCustomerInfo: {
    phone: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    toWardId: string;
    toDistrictId: string;
    address: string;
  },
  products: any[];
  paymentMethod: number;
}

export interface QueryObject {
  createdType: number;
  customerUuid?: string;
  newCustomerInfo: {
    phone: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    toWardId: string;
    toDistrictId: string;
    address: string;
  },
  products: any[];
  paymentMethod: number;
}

export interface QueryCheckOtpObj {
  phone: string;
  otpCode: any;
}

export interface QueryActiveObj {
  phone: string;
  otpCode: string;
  username: string;
  password: string;
}

export interface QueryRegisterObject {
  username: string;
  password: string;
  email: string;
  phone: string;
  role: number;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  gender?: number;
  dob?: string;
  countryCode?: string;
}

export interface OrderCustomerServices {
  createOrder: (queryObj: QueryObject) => Promise<AxiosResponse<IOrder>>;
  checkPhoneExist: (phone: string) => Promise<AxiosResponse<any>>;
}
