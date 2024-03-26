import { API_PREFIX } from '@/interfaces/common';
import HttpClient from '@/lib/httpPrivate';
import { catchAxiosError } from './instance';

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}

export class searchAPI extends HttpClient {
  public getResults= async (param: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/search?search=${param}`)
          .catch(catchAxiosError);
      return response;
  };

  public getContentResults= async (id: string): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/document/${id}`)
        .catch(catchAxiosError);
    return response;
};

}
