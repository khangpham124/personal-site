import { AxiosResponse } from 'axios';
import { OrderType } from '@/constants/common';
// import brand from 'next-seo/lib/jsonld/brand';

interface IProductStyle {
  uuid: string;
  name: string;
  code: string;
}

interface IProductCategory {
  uuid: string;
  name: string;
}

interface IProductCollection {
  uuid: string;
  name: string;
  isShowWeb: boolean;
}

export interface IProduct {
  uuid: string;
  mainImage: string;
  skuCode: string;
  descriptionVi: string;
  descriptionEn: string;
  style: IProductStyle;
  barCode: string;
  name: string;
  category: IProductCategory;
  brand: string;
  size: string;
  color: string;
  versionName: string;
  collectionList: IProductCollection[];
  season: string;
  releasedDate: string;
  price: string;
  discount: number;
  slug: string;
  totalSoldItems: number;
  data: any;
  relatedItems?: any[]
}

export interface IProductsDetail {
    product?: {
        uuid: string,
        mainImage: string,
        skuCode: string,
        descriptionVi: string;
        descriptionEn: string;
        style?: {
          uuid: string;
          name: string;
          code: string;
        }
        barCode: string,
        name: string,
        category: any[],
        brand: "J",
        size: "S",
        color: "V",
        versionName: string,
        collectionList?: any[],
        season?: string,
        releasedDate: any,
        price: number,
        slug: string,
        isHot: boolean ,
        materialsList?: any[],
        images?: any[],
        relatedItems?: any[],
        promotions?: any[],
        priceAfterDiscount?: number
    },
    totalAvailableItems: number,
    totalSoldItems: number

}

export interface IProductStore {
  product: IProduct;
  totalAvailableItems?: number;
  price?: string;
  discount?: number;
  totalSoldItems?: number;
  data?:any
}

export interface IProducts extends IProductsDetail {
  data: IProductStore[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  relatedItems?: any[]
  promotions?: any[]
}

export interface IProductsSameStyle {
  products: IProductsDetail;
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  relatedItems?: any[],
  data?: any[]
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

export interface CustomerProductServices {
  getProducts: (queryObj?: QueryObject) => Promise<AxiosResponse<IProducts>>;
  getProductsDetail: (id?: string) => Promise<AxiosResponse<IProducts>>;
  getProductsByStyle: (style: string) => Promise<AxiosResponse<IProductsSameStyle>>;
}
