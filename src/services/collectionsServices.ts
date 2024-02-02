import { CollectionsServices , QueryObject } from '@/interfaces/collection-service';
import http from '@/lib/http';

export const API_PREFIX = 'https://api.juclothing.com/api/jusystem';
export const ARTICLE_BASE_URL = `/customer/orders`;
import { catchAxiosError } from './instance';
import HttpClient from './instance';
import { IResponse } from './customerArticles';

const collectionsServices: CollectionsServices = {
  getCollections: (queryObject?: QueryObject) => {
    return http.get('/collections?isShowWeb=true', { params: queryObject });
  },

  getLastestCollections: () => {
    return http.get('/collections?isShowWeb=true&page=1&perPage=1');
  }
};
export default collectionsServices;


export class collectionAPI extends HttpClient {
  public getAllCollections = async (): Promise<IResponse> => {
    // const paramPageNumber = page ? `?page=${page}` : `?page=1`
    // const paremPerPage = perPage ? `&perPage=${perPage}` : `&perPage=20`
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/collections?isShowWeb=true`)
        .catch(catchAxiosError);
    return response;
  };

  public getDetailCollection = async (id: string): Promise<IResponse> => {
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}/collections/${id}`)
        .catch(catchAxiosError);
    return response;
  };

}