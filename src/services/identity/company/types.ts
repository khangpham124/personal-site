export interface ItemsUser {
  id: string;
  username: string;
  firstName: string;
  email: string;
  createdTimestamp: string;
  totalItems: number;
  totalPages: number;
  pageSize: number;
  pageIndex: number;
  platformAccess: any;
};


export type TUsersResponse = ItemsUser;


export interface IFormUpdateCompanyProfile {
  employeeCount?: number | null,
  description?: string | null,
  name?: string | null,
  accessLink?: string | null,
  phoneNumber?: string | null,
  website?: string | null,
  address?: string | null
}

enum ERoleName {
  Sale = "Sale",
  Owner = "Owner"
}

export enum EEmployeeCount {
  MIN_0_MAX_10,
  MIN_10_MAX_50,
  MIN_50_MAX_100,
  MIN_100_MAX_500,
  MIN_500_MAX_1000,
  OVER_1000,
}

export interface IRole {
  id?: string | null,
  name?: ERoleName,
  createdAt?: string | null,
  updatedAt?: string | null,
  createdBy?: string | null,
  updatedBy?: string | null
}

export interface ICompany {
  createdAt?: string | null,
  createdBy?: string | null,
  updatedAt?: string | null,
  updatedBy?: string | null,
  id?: string | null,
  name?: string | null,
  accessLink?: string | null,
  employeeCount?: EEmployeeCount | null,
  description?: string | null,
  phoneNumber?: string | null,
  website?: string | null,
  address?: string | null,
  roles: IRole[],
  companyOwner: {
    firstName: string,
    lastName: string,
    email: string
  }
}

