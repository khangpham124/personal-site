import { AxiosResponse } from 'axios';
import { IProduct } from './cart-types';
import { ServerResponse } from './common';

export interface ProductResponse extends ServerResponse {
  data: IProduct[];
}

export interface QueryObject {
  genres?: string;
  gender?: number;
  status?: string;
  top?: string;
  minchapter?: number;
  page?: number;
}

export interface ProductServices {
  getProducts: (queryObj: QueryObject) => Promise<AxiosResponse<ProductResponse>>;
}
