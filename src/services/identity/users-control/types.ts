export interface ItemsUser  {
  id: string;
  username: string;
  firstName: string;
  email:string;
  createdTimestamp:string;
  totalItems:number;
  totalPages:number;
  pageSize:number;
  pageIndex:number;
};


export type TUsersResponse = ItemsUser;

