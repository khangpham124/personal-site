import { useQuery } from '@tanstack/react-query';
import customerProductServices from '@/services/customerProductServices';
import { QueryObject } from '@/interfaces/customerProduct-service';

export const useCustomerProducts = (queryObject?: QueryObject) => {
  return useQuery(['products'], async () => {
    const response = await customerProductServices.getProducts(queryObject);
    return response.data;
  });
};

// export const useCustomerProductsDetail = (id?: string) => {
//   return useQuery(['products'], async () => {
//     const response = await customerProductServices.getProductsDetail(id);
//     return response.data;
//   });
// };

export const useCustomerProductsDetail = (id?: string) => {
  return useQuery(['products'], async () => {
    const response = await customerProductServices.getProductsDetail(id);
    return response.data;
  });
};


export const useProductsSameStyle = (style?: string) => {
  return useQuery(['productsStyle'], async () => {
    const response = await customerProductServices.getProductsByStyle(String(style));
    return response.data;
  });
};

export const useProductsByUuid = (id?: string) => {
  return useQuery(['productsStyle'], async () => {
    const response = await customerProductServices.getProductsByStyle(String(id));
    return response.data;
  });
};


export const colorOptions = [
  { label: 'PINK', value: 'H', code: 'F5C3CB' },
  { label: 'ORANGE', value: 'C', code: 'EFA543'  },
  { label: 'RED', value: 'R' , code: 'E85F59' },
  { label: 'YELLOW', value: 'V' , code: 'F7DC8B' },
  { label: 'GREEN', value: 'XL' , code: '73CF9A' },
  { label: 'BLUE', value: 'XD' , code: '9FCBF6' },
  { label: 'VOILET', value: 'T' , code: '3571E3' },
  { label: 'BLACK', value: 'D' , code: '000000' },
  { label: 'GRAY', value: 'XA' , code: '1F262C' },
  { label: 'WHITE', value: 'TR', code: 'FFFFFF' },
  { label: 'BROWN', value: 'N' ,code: '743B3A' },
  { label: 'BE', value: 'B' , code: 'F5C3CB' },
  { label: 'Multicolor', value: 'M' , code: 'F5C3CB' },
  { label: 'PANTERN', value: 'P' , code: 'F5C3CB' },
  { label: 'CREAM', value: 'K' , code: 'F5C3CB' },
];