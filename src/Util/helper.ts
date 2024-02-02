import { IProduct } from '@/interfaces/cart-types';
import { ProductType, TNavigation } from '@/interfaces/common';

export const formatPriceVND = (prices: string | number): string => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    Number(prices)
  );
};

export const getLinkProduct = (type: ProductType, _item: IProduct): string => {
  switch (type) {
    case ProductType.sale:
      return '/';
    case ProductType.product:
      return '/';
    default:
      return '/';
  }
};

export const checkExists = (data: TNavigation[], searchStr: string, slug: string): boolean => {
  return data.some((item) => item?.url && item.url.replace(searchStr, '') === slug);
};
