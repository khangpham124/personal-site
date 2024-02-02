import { AxiosResponse } from 'axios';
import { commonType } from './cart-types';
import { IProductsDetail} from './customerProduct-service'

export interface ICollection {
  uuid: string;
  name: string;
  imageUrl: string;
  descriptionEn: string;
  descriptionVi: string;
  isShowWeb: boolean;
  products: any[];
  data?: any[];
}

export interface ICollectionProducts extends commonType {
  uuid: string;
  name: string;
  imageUrl: string;
  descriptionEn: string;
  descriptionVi: string;
  isShowWeb: boolean;
  products: IProductsDetail;
  
}

export interface QueryObject {
  page?: number;
  perPage?: number;
  isShowWeb: boolean;
  dataCollection: any[];
}



export interface CollectionsServices {
  getCollections: (queryObj?: QueryObject) => Promise<AxiosResponse<ICollection>>;
  getLastestCollections: () => Promise<AxiosResponse<ICollection>>;
}
