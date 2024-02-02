import {
  ORDERS_BASE_URL,
  API_PREFIX,
  SHIPPING_BASE_URL
} from '@/interfaces/orderCustomer-service';
import { catchAxiosError } from './instance';
import HttpClient from './instance';


export interface OrderParam {
    IDItem: string;
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

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}


export class orderAPI extends HttpClient {
    public createOrder = async (requestBody: any): Promise<IResponse> => {
        const response: IResponse = await this.instance
            .post(`${API_PREFIX}${ORDERS_BASE_URL}`, requestBody)
            .catch(catchAxiosError);
        return response;
    };

    public checkPhoneExist = async (phone: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/auth/customer/get-by-phone/${phone}`)
          .catch(catchAxiosError);
      return response;
    };

    public getProvince = async (): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${SHIPPING_BASE_URL}/province`)
          .catch(catchAxiosError);
      return response;
  };


  public getDistrict = async (province: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${SHIPPING_BASE_URL}/district?province_id=${province}`)
          .catch(catchAxiosError);
      return response;
  };

  public getWard = async (district: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${SHIPPING_BASE_URL}/ward?district_id=${district}`)
          .catch(catchAxiosError);
      return response;
  };

  public getShippingStatus = async (orderCode: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${SHIPPING_BASE_URL}/shipping-order/detail?order_code=${orderCode}`)
          .catch(catchAxiosError);
      return response;
  };


  public getShippingFee = async (payload: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .post(`${SHIPPING_BASE_URL}/shipping-order/fee/`, payload)
          .catch(catchAxiosError);
      return response;
  };


  public paymentToMomo = async (orderUuid: string, payBy: string ): Promise<IResponse> => {
    const payload = {
      feService: 0,
      requestType: payBy,
      lang: "vi"
    }
    const response: IResponse = await this.instance
        .post(`${API_PREFIX}${ORDERS_BASE_URL}/${orderUuid}/payments/momo`, payload)
        .catch(catchAxiosError);
    return response;
};
}
