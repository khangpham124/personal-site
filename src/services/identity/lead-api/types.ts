export interface ItemsLead  {
  id: string;
  username: string;
  firstName: string;
  email:string;
  createdTimestamp:string;
  totalItems:number;
  totalPages:number;
  pageSize:number;
  pageIndex:number;
  platformAccess:any;
  attachments: any[];
};


export type TLeadResponse = ItemsLead;

