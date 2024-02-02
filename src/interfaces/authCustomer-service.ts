import { AxiosResponse } from 'axios';

export interface IError {
  message: string;
  statusCode: number;
  errorCode: string;
}

export interface ICustomer {
  uuid: string;
  accessToken: string;
  refreshToken: string;
  code: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: number;
  dob: string;
  country: {
    code: string;
    name: string;
  };
  createdAt: string;
  status: number;
  membershipInfo: {
    uuid: string;
    totalSpending: string;
    totalProducts: number;
    totalOrders: number;
    totalReturnProducts: number;
    totalPoints: number;
    defaultDiscount: number;
    currentDebt: string;
    applyDiscountType?: string;
    defaultPricePolicy?: string;
    lastBoughtAt?: string;
  };
  createdBy?: string;
  city?: string;
  address?: string;
  avatar?: string;
  groupCode?: string;
}

export interface QueryObject {
  username: string;
  password: string;
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

export interface AuthCustomerServices {
  login: (queryObj: QueryObject) => Promise<AxiosResponse<ICustomer>>;
  register: (queryObj: QueryRegisterObject) => Promise<AxiosResponse<ICustomer>>;
  sendOtp: (phone: string) => Promise<AxiosResponse<any>>;
  checkOtp: (queryCheckOtpObj: QueryCheckOtpObj) => Promise<AxiosResponse<any>>;
  accountActivation: (QueryActiveObj: QueryActiveObj) => Promise<AxiosResponse<any>>;
}
