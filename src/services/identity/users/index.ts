import HttpClient from '../../../utils/axios/instance';
import { catchAxiosError } from '../../../utils/axios/error';
import { IResponse, IConfig } from '../../../utils/axios/entities';
import { crmPlatform } from "src/services/identity";
import {
  baseUrl,
  USERS_API_URL,
  PLATFORM_ACCESSES,
  INVITE_USER,
  CONFIRM_INVITE_USER,
  COMPANY_API_URL
} from '../index';
import { IUserDetailInCompany } from './types';
// import { TUsersResponse, ItemsUser } from './types';

export class usersAPI extends HttpClient {
  public getAllUsers = async (pageNumber?: number, filters?: any): Promise<IResponse> => {
    const filtering = filters && Object.keys(filters).length ? `filter=${JSON.stringify(filters)}&` : '';
    const paging = pageNumber ? `pageIndex=${pageNumber}` : 'pageIndex=1';
    const response: IResponse = await this.instance.get(`${crmPlatform}/${USERS_API_URL}?${filtering}${paging}&pageSize=20`).catch(catchAxiosError);
    return response;
  };

  public getUserDetailInCompanyByID = async (userId: string, companyId: string): Promise<IUserDetailInCompany> => {
    const response: IResponse = await this.instance.get(`${crmPlatform}/${USERS_API_URL}/${userId}/company/${companyId}`).catch(catchAxiosError);
    return response.data;
  };

  public getDetailUser = async (IDUser: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.get(`${crmPlatform}/${USERS_API_URL}/${IDUser}`).catch(catchAxiosError);
    return response;
  };

  public updateUserDetail = async (userId: string, companyId: string, requestBody?: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.patch(`${crmPlatform}/${USERS_API_URL}/${userId}/company/${companyId}`, requestBody).catch(catchAxiosError);
    return response;
  };

  public getPlatformAccessesbyID = async (IDUser: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.patch(`${crmPlatform}/${PLATFORM_ACCESSES}/${IDUser}`).catch(catchAxiosError);
    return response;
  };

  public removeUser = async (IDUser: string, requestBody: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.delete(`${crmPlatform}/user-role-company/${IDUser}`, requestBody).catch(catchAxiosError);
    return response;
  };

  public inviteNewUser = async (requestBody?: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.post(`${crmPlatform}/${INVITE_USER}`, requestBody).catch(catchAxiosError);
    return response;
  };


  public firstSetupUserDetail = async (IDUser: string, requestBody?: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.post(`${crmPlatform}/${USERS_API_URL}/${IDUser}/authentication`, requestBody).catch(catchAxiosError);
    return response;
  };

  public lastAccessCompany = async (IDUser: string, IDCompany: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.patch(`${crmPlatform}/${USERS_API_URL}/${IDUser}/company/${IDCompany}/last-access`).catch(catchAxiosError);
    return response;
  };

  public getListCompany = async (IDUser: string, pageIndex?: number, pageSize?:number) : Promise<IResponse> => {
    const response: IResponse = await this.instance.get(`${crmPlatform}/${USERS_API_URL}/${IDUser}/company-list?pageIndex=${pageIndex ? pageIndex : 1}${pageSize ? `&pageSize=${pageSize}`: `&pageSize=20` }&sort={"lastAccess": "DESC"}`).catch(catchAxiosError);
    return response;
  };

}