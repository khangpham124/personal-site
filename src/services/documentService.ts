import { API_PREFIX } from '@/interfaces/orderCustomer-service';
import HttpClient from '@/lib/httpPrivate';
import { catchAxiosError } from './instance';

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}

export interface ItemOrder {
  uuid: string;
  code: string;
  shippingPrice: string;
  totalPrice: string;
  voucherDiscountPrice: string;
  status: boolean;
  saleStaff: any;
  customer: any;
  cashier: any;
  store: any;
  createdAt: string;
  lastUpdatedAt: string;
}

export interface ItemMember {
  totalSpending:number;
  totalPoints:number;
  totalOrders: number;
  ranking: number
}

export interface ItemCustomer {
  uuid: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  code: string;
  groupCode: string;
  username?: string;
  password?: string;
  createdAt: any;
  lastUpdatedAt: string;
  createdBy: string;
  address?: string;
  status: number;
  gender: number;
  dob: any;
  country?: {
      code: string;
      name: string
    },
  city?: {
      id: 0,
      name: string;
      prefix: string;
      enPrefix: string;
  },
  district?: {
      id: 0,
      name: string;
      prefix: string;
      enPrefix: string;
  },
  ward?: {
      id: 0,
      name: string;
      prefix: string;
      enPrefix: string;
  },
  membershipInfo: {
      applyDiscountType: number;
      currentDebt: number;
      defaultDiscount: number;
      defaultPricePolicy: number;
      lastBoughtAt: any;
      totalOrders: number;
      totalPoints: number;
      totalProducts: number;
      totalReturnProducts: number;
      totalSpending: number;
      uuid: string;
  }
}


export class documentAPI extends HttpClient {
  public getDocuments= async (): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/works`)
          .catch(catchAxiosError);
      return response;
  };

}
