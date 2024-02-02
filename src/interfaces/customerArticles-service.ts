import { AxiosResponse } from 'axios';
import { OrderType } from '@/constants/common';
import { IProduct } from './cart-types';


export interface IArticle {
  uuid: string,
  titleVi: string,
  titleEn: string,
  descriptionEn: string,
  descriptionVi: string,
  contentEn: string,
  contentVi: string,
  slug: string,
  type: number,
  isShowWeb: true,
  imageUrl: string,
  createdAt: string,
  createdBy: string,
  data?:any[]
}

export interface IArticleStore {
  product: IProduct;
  totalAvailableItems: number;
  price: string;
  discount: number;
  totalSoldItems: number;
}

export interface IArticleDetail {
  data: IArticleStore[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  relatedItems?: any[]
}

export interface QueryObject {
  storeUuid?: string;
  page?: number;
  perPage?: number;
  categoryUuids?: string;
  collectionUuids?: string;
  colors?: string;
  size?: string;
  fromPrice?: number;
  toPrice?: number;
  orderByPrice?: OrderType;
  orderByCreatedAt?: OrderType;
}

export interface CustomerArticleServices {
  getArticles: (queryObj?: QueryObject) => Promise<AxiosResponse<IArticle>>;
  getArticleDetail: (id?: string) => Promise<AxiosResponse<IArticle>>;
  getArticleByPost: (type?: number, queryObj?: QueryObject) => Promise<AxiosResponse<IArticle>>;
}
