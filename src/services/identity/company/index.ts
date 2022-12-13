import HttpClient from '../../../utils/axios/instance';
import { catchAxiosError } from '../../../utils/axios/error';
import { IResponse, IConfig } from '../../../utils/axios/entities';
import {
  baseUrl,
  COMPANY_API_URL
} from '../index';
// import { TUsersResponse, ItemsUser } from './types';
import { crmPlatform } from "src/services/identity";
import { IFormUpdateCompanyProfile } from './types';

export class companyAPI extends HttpClient {
  public getCompanies = async (pageNumber?: number, filters?: any): Promise<IResponse> => {
    const filtering = filters && Object.keys(filters).length ? `filter=${JSON.stringify(filters)}&` : '';
    const paging = pageNumber ? `pageIndex=${pageNumber}` : 'pageIndex=1';
    const response: IResponse = await this.instance.get(`${crmPlatform}/${COMPANY_API_URL}`).catch(catchAxiosError);
    return response;
  };
  public getDetailCompany = async (IDCompany: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.get(`${crmPlatform}/${COMPANY_API_URL}/${IDCompany}/employees?pageIndex=1&pageSize=200&sort={ "createdAt": "DESC" }`).catch(catchAxiosError);
    return response;
  };
  public getDetailCompanyById = async (IDCompany: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.get(`${crmPlatform}/${COMPANY_API_URL}/${IDCompany}`).catch(catchAxiosError);
    return response;
  };
  public UpdateCompanyProfileById = async (IDCompany: string, body: IFormUpdateCompanyProfile): Promise<IResponse> => {
    const response: IResponse = await this.instance.patch(`${crmPlatform}/${COMPANY_API_URL}/${IDCompany}`, body).catch(catchAxiosError);
    return response;
  };

  public createCompany = async (body: IFormUpdateCompanyProfile): Promise<IResponse> => {
    const response: IResponse = await this.instance.post(`${crmPlatform}/${COMPANY_API_URL}`, body).catch(catchAxiosError);
    return response;
  };

  public deleteCompany = async (IDCompany: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.delete(`${crmPlatform}/${COMPANY_API_URL}/${IDCompany}`).catch(catchAxiosError);
    return response;
  };

  // public getDetailCompany = async (IDCompany:string): Promise<IResponse> => {
  //   const response: IResponse = await this.instance.get(`${baseUrl}/${COMPANY_API_URL}/${IDCompany}/employees`).catch(catchAxiosError);
  //   return response;
  // };


}