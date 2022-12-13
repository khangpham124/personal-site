import HttpClient from "../../../utils/axios/instance";
import { catchAxiosError } from "../../../utils/axios/error";
import { IResponse, IConfig } from "../../../utils/axios/entities";
import {
  baseUrl,
  LEAD_API_URL,
  PLATFORM_ACCESSES,
  INVITE_USER,
  CONFIRM_INVITE_USER,
} from "../index";
import { crmPlatform } from "src/services/identity";
// import { TUsersResponse, ItemsUser } from './types';

export class LeadAPI extends HttpClient {
  public fetchLeads = async (
    pageNumber?: number,
    filters?: any,
    perPage?: number,
    companyId?: string
  ): Promise<IResponse> => {
    const filtering =
      filters && Object.keys(filters).length
        ? `filter=${JSON.stringify(filters)}&`
        : "";
    const paging = pageNumber ? `pageIndex=${pageNumber}` : "pageIndex=1";
    const response: IResponse = await this.instance
      .get(
        `${crmPlatform}/${LEAD_API_URL}?${filtering}${paging}&pageSize=${
          perPage ? perPage : 20
        }&companyId=${companyId}`
      )
      .catch(catchAxiosError);
    return response;
  };

  public getDetailLead = async (IDLead: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .get(`${crmPlatform}/${LEAD_API_URL}/${IDLead}`)
      .catch(catchAxiosError);
    return response.data;
  };

  public updateLeadStatus = async (
    IDLead: any,
    payload: any
  ): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .patch(`${crmPlatform}/${LEAD_API_URL}/${IDLead}`, payload)
      .catch(catchAxiosError);
    return response.data;
  };

  public deleteLead = async (IDLead: string): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .delete(`${crmPlatform}/${LEAD_API_URL}/${IDLead}`)
      .catch(catchAxiosError);
    return response.data;
  };

  public deleteMassLeads = async (data: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .delete(`${crmPlatform}/${LEAD_API_URL}`, { data })
      .catch(catchAxiosError);
    return response.data;
  };

  public exportLead = async (IDLead: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .get(`${crmPlatform}/${LEAD_API_URL}/${IDLead}/export`)
      .catch(catchAxiosError);
    return response.data;
  };
}
