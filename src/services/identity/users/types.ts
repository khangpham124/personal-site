import { ICompany, IRole } from "../company/types";
export interface IUserDetail {
  id: string | null;
  username: string | null;
  userId: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: number | null;
  birthday: string | null;
  description: string | null;
  imageLink: string | null;
  namespace: string | null;
  createdTimestamp: string | null;
  cityId: number | null;
  districtId: number | null;
  wardId: number | null;
  street: string | null;
  platformAccess: any | null;
}
export interface ItemsUser {
  id: string | null;
  username: string | null;
  userId: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: number | null;
  birthday: string | null;
  description: string | null;
  imageLink: string | null;
  namespace: string | null;
  createdTimestamp: string | null;
  totalItems: number | null;
  totalPages: number | null;
  pageSize: number | null;
  pageIndex: number | null;
  cityId: number | null;
  districtId: number | null;
  wardId: number | null;
  street: string | null;
  platformAccess: any | null;
  roles: {
    company?: ICompany;
    companyIdr: string | null;
    idr: string | null;
    invitedByUser: TUsersResponse;
    invitedByUserUuid: string | null;
    invitedEmail: string | null;
    isConfirmed: boolean;
    reportToUser: string | null;
    reportToUserUuid: string | null;
    role?: IRole,
    roleId: string | null;
    shouldSetIntegrationIsSyncPropertyToFalse: boolean
    token: string | null;
    tokenExpiredDate: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    userUuid: string | null;
  }[]

};

export interface IUserDetailInCompany {
  createdAt: string | null;
  createdBy: string | null;
  updatedAt: string | null;
  updatedBy: string | null;
  company: ICompany | null,
  user: IUserDetail | null,
  role: IRole | null,
  invitedByUser: IUserDetail | null,
  reportToUser: IUserDetail | null,
  phone: number | null,
  roles: {
    company?: ICompany;
    companyIdr: string | null;
    idr: string | null;
    invitedByUser: TUsersResponse;
    invitedByUserUuid: string | null;
    invitedEmail: string | null;
    isConfirmed: boolean;
    reportToUser: string | null;
    reportToUserUuid: string | null;
    role?: IRole,
    roleId: string | null;
    shouldSetIntegrationIsSyncPropertyToFalse: boolean
    token: string | null;
    tokenExpiredDate: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
    userUuid: string | null;
  }[]
}
export type TUsersResponse = ItemsUser;

