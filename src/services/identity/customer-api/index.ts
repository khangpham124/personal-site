import HttpClient from "../../../utils/axios/instance";
import { catchAxiosError } from "../../../utils/axios/error";
import { IResponse, IConfig } from "../../../utils/axios/entities";
import {
  baseUrl,
  CUSTOMER_API_URL
} from "../index";
import { crmPlatform } from "src/services/identity";

export class CustomerAPI extends HttpClient {
  public fetchCustomers = async (
    pageNumber?: number,
    perPage?: number,
    companyId?: string,
    filters?: any
  ): Promise<IResponse> => {
    const filtering =
      filters && Object.keys(filters).length
        ? `filter=${JSON.stringify(filters)}&`
        : "";
    const paging = pageNumber ? `pageIndex=${pageNumber}` : "pageIndex=1";
    const response: IResponse = await this.instance
      .get(
        `${crmPlatform}/${CUSTOMER_API_URL}?${filtering}${paging}&pageSize=${
          perPage ? perPage : 20
        }&companyId=${companyId}`
      )
      .catch(catchAxiosError);
    return response;
  };

  public getDetailCustomer = async (IDLead: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .get(`${crmPlatform}/${CUSTOMER_API_URL}/${IDLead}`)
      .catch(catchAxiosError);
    return response.data;
  };

  public createCustomer = async (
    payload: any
  ): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .post(`${crmPlatform}/${CUSTOMER_API_URL}/`, payload)
      .catch(catchAxiosError);
    return response.data;
  };

  public updateCustomerStatus = async (
    IDLead: any,
    payload: any
  ): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .patch(`${crmPlatform}/${CUSTOMER_API_URL}/${IDLead}`, payload)
      .catch(catchAxiosError);
    return response.data;
  };

  public deleteCustomer = async (IDLead: string): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .delete(`${crmPlatform}/${CUSTOMER_API_URL}/${IDLead}`)
      .catch(catchAxiosError);
    return response.data;
  };

  public deleteMassCustomer = async (data: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .delete(`${crmPlatform}/${CUSTOMER_API_URL}`, { data })
      .catch(catchAxiosError);
    return response.data;
  };

  public exportCustomer = async (IDLead: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .get(`${crmPlatform}/${CUSTOMER_API_URL}/${IDLead}/export`)
      .catch(catchAxiosError);
    return response.data;
  };
}
