import { API_PREFIX } from '@/interfaces/common';
import HttpClient from '@/lib/httpPrivate';
import { catchAxiosError } from './instance';

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}

export class infoAPI extends HttpClient {
  public getListWorks= async (): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/works?per_page=100`)
          .catch(catchAxiosError);
      return response;
  };

  public getThumbWork= async (url: string): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${url}`)
        .catch(catchAxiosError);
    return response;
};

  
};
