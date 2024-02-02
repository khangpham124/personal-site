import { API_PREFIX } from '@/interfaces/orderCustomer-service';
import HttpClient from '@/lib/httpPrivate';
import { catchAxiosError } from './instance';

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}

export interface ItemPromotion {
  uuid: string,
  discountValue: string,
  discountUnit: number
  maximumDiscountUnit: number,
  minimumOrderPrice:string,
  name:string,
  code: any
  startDate: string,
  endDate: string,
  type: number,
  subType: number,
  usageTimes: number,
  currentUsageTimes: number,
  canApplyWithVoucher: boolean,
  brand: string,
  customerRankingRequired: string
  store: any,
  category: string,
  minimumOrderTotalItems: number,
  fixedComboPrice: string,
  requiredProducts?: any,
  bonusProducts?: any,
}

export class promotionAPI extends HttpClient {
  public getAllPromotions = async (): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/customer/promotions`)
          .catch(catchAxiosError);
      return response;
  };

  public getAllVoucher = async (): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/customer/promotions/ju-vouchers`)
        .catch(catchAxiosError);
    return response;
};

  public pricingOrder = async (payload: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .post(`${API_PREFIX}/customer/orders/pricing`, payload )
        .catch(catchAxiosError);
    return response;
  };
}

