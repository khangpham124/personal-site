// import { CustomerArticleServices, QueryObject } from '@/interfaces/customerInform-service.ts';
import { API_PREFIX } from '@/interfaces/orderCustomer-service';
// import { axiosPrivate } from '@/lib/http';
// import axiosPrivate from '@/lib/httpPrivate';
import HttpClient from './instance';
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

// const customerProfileServices: CustomerArticleServices = {
//   getCustomerProfile: (queryObject?: QueryObject) => {
//     return axiosPrivate.get('/customers/profile', { params: queryObject });
//   },

// };

// export default customerProfileServices;


export class itemAPI extends HttpClient {

  public getProductDetai = async (id: string): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/customer/products/${id}`)
        .catch(catchAxiosError);
    return response;
  };

  public getProductInHot = async (page: number): Promise<IResponse> => {
    const perPage = 8;
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/customer/products?page=${page}&perPage=${perPage}&lteTotalAvailableItems=1&isHot=true`)
        .catch(catchAxiosError);
    return response;
  };

  public getProductInStore = async (page: number): Promise<IResponse> => {
    const perPage = 18;
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/customer/products?page=${page}&perPage=${perPage}&lteTotalAvailableItems=1`)
        .catch(catchAxiosError);
    return response;
  };

    public getFlashSaleInStore = async (): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/customer/flash-sale`)
          .catch(catchAxiosError);
      return response;
  };

  public getCategoryItem = async (): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/category`)
        .catch(catchAxiosError);
    return response;
  };

  public getProductInFilter = async (fromPrice?: number, toPrice?:number, categoryUuids?: string, colors?: string, sort?: string ): Promise<IResponse> => {
    const paramFromPrice = `?fromPrice=${fromPrice}`;
    const paramToPrice = `&toPrice=${toPrice}`;
    const paramCategoryUuids = categoryUuids !== '' ? `&categoryUuids=${categoryUuids}` : ``;
    const paramColors = colors !== '' ? `&colors=${colors}` : ``;
    const paramSort = sort !== '' ? sort : ``;
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/customer/products${paramFromPrice}${paramToPrice}${paramCategoryUuids}${paramColors}${paramSort}`)
        .catch(catchAxiosError);
    return response;
  };
}
