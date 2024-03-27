import { API_PREFIX } from '@/interfaces/common';
import HttpClient from '@/lib/httpPrivate';
import { catchAxiosError } from './instance';

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}

export class infoAPI extends HttpClient {
  public getPageAboutResults= async (): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/pages/296`)
          .catch(catchAxiosError);
      return response;
  };
};
