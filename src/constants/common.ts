import { ProductType, TProductType } from '@/interfaces/common';

export const PRODUCT_TYPE: TProductType = {
  sale: ProductType.sale,
  product: ProductType.product,
};

export type OrderType = 'ASC' | 'DESC';

export const ERROR_CODE = {
  ACCOUNT_IS_NOT_ACTIVATED: '0018',
  PHONE_IS_EXISTED_WITHOUT_CREDENTIAL: '0065',
  USERNAME_IS_EXISTED: '0001',
  EMAIL_IS_EXISTED: '0017',
  PHONE_IS_EXISTED: '0030',
};

export const SUCCESS_CODE = [200, 201];
