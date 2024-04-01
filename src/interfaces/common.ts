export const API_PREFIX = 'http://teddycoder.click/wp-json/wp/v2';

export interface ServerResponse {
  success: boolean;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export enum ProductType {
  sale = 'sale',
  product = 'product',
}

export type TProductType = {
  [key: string]: ProductType;
};

export type TNavigation = {
  url?: string;
  title?: string;
  trans?: string;
  thumb?: string;
  children?: TNavigation[];
};
