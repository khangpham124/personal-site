import { AxiosResponse } from 'axios';

export interface IProfile {
  createdAt: string,
  lastUpdatedAt: string,
  createdBy: string,
  lastUpdatedBy: string,
  uuid: string,
  code: string,
  groupCode: string,
  username: string,
  password: string,
  email: string,
  avatar: string,
  firstName: string,
  lastName: string,
  fullName: string,
  dob: string,
  gender: number,
  phone: string,
  country: {
    code: string,
    name: string
  },
  city: {
    id: 0,
    name: string,
    prefix: string,
    enPrefix: string
  },
  address: string
}


export interface QueryObject {
  storeUuid?: string;
  page?: number;
  perPage?: number;
}

export interface CustomerArticleServices {
  getCustomerProfile: (queryObj?: QueryObject) => Promise<AxiosResponse<IProfile>>;
}
