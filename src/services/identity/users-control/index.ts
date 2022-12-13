import HttpClient from '../../../utils/axios/instance';
import { catchAxiosError } from '../../../utils/axios/error';
import { IResponse, IConfig } from '../../../utils/axios/entities';
import {
  baseUrl,
  USERS_API_URL,
  PLATFORM_ACCESSES,
  INVITE_USER
} from '../index';
// import { TUsersResponse, ItemsUser } from './types';

export class usersAPI extends HttpClient {
  public getAllUsers = async (pageNumber?: number, filters?: any): Promise<IResponse> => {
    const filtering = filters && Object.keys(filters).length ? `filter=${JSON.stringify(filters)}&` : '';
    const paging = pageNumber ? `pageIndex=${pageNumber}` : 'pageIndex=1';
    const response: IResponse = await this.instance.get(`${baseUrl}/${USERS_API_URL}?${filtering}${paging}&pageSize=20`).catch(catchAxiosError);
    return response;
  };

  public getplatformAccesses = async (): Promise<IResponse> => {
    const response: IResponse = await this.instance.get(`${baseUrl}/${PLATFORM_ACCESSES}`).catch(catchAxiosError);
    return response;
  };

  public updateUserDetail = async (IDUser: string, requestBody?: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.patch(`${baseUrl}/${PLATFORM_ACCESSES}/${IDUser}`, requestBody).catch(catchAxiosError);
    return response;
  };

  public getPlatformAccessesbyID = async (IDUser: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.patch(`${baseUrl}/${PLATFORM_ACCESSES}/${IDUser}`).catch(catchAxiosError);
    return response;
  };

  public inviteNewUser = async (requestBody?: any): Promise<IResponse> => {
    const response: IResponse = await this.instance.post(`${baseUrl}/${INVITE_USER}`, requestBody).catch(catchAxiosError);
    return response;
  };
}