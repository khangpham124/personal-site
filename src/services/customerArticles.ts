import { CustomerArticleServices, QueryObject } from '@/interfaces/customerArticles-service';
import http from '@/lib/http';

import { API_PREFIX } from '@/interfaces/orderCustomer-service';
import HttpClient from './instance';
import { catchAxiosError } from './instance';

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}

const customerArticlesServices: CustomerArticleServices = {
  getArticles: (queryObject?: QueryObject) => {
    return http.get('/articals', { params: queryObject });
  },

  getArticleDetail: (id?:string) => {
    return http.get(`/articals/${id}`);
  },

  getArticleByPost: (typePost?:number, queryObject?: QueryObject) => {
    return http.get(`/articals?type=${typePost}`, { params: queryObject });
  },

};
export default customerArticlesServices;


export class postAPI extends HttpClient {
  public getPostbySlug = async (slug: string): Promise<IResponse> => {
      const response: IResponse = await this.instance
          .get(`${API_PREFIX}/articals?slug=${slug}`)
          .catch(catchAxiosError);
      return response;
  };


  public getPostbyHomepage = async (): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/articals?onTop=true`)
        .catch(catchAxiosError);
    return response;
};

}