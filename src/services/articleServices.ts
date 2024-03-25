export const API_PREFIX = 'https://teddycoder.com/wp-json/wp/v2';
export const ARTICLE_BASE_URL = `/customer/orders`;
import { catchAxiosError } from './instance';
import HttpClient from './instance';



export interface ItemPost {
  titleVi: string;
  titleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  isShowWeb: boolean;
  contentVi: string;
  contentEn: boolean;
  slug: string;
  type: number;
  createdAt: string;
  uuid: string;
  imageUrl:string;
}

export interface IResponse {
  data?: any;
  error?: any;
  status?: any;
}


export class articleAPI extends HttpClient {
  public getAllPost = async (page?: number, perPage?: number): Promise<IResponse> => {
    const paramPageNumber = page ? `?page=${page}` : `?page=1`
    const paremPerPage = perPage ? `&perPage=${perPage}` : `&perPage=20`
    const response: IResponse = await this.instance
        .get(`${API_PREFIX}${ARTICLE_BASE_URL}${paramPageNumber}${paremPerPage}`)
        .catch(catchAxiosError);
    return response;
  };

}
