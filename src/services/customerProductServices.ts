import { CustomerProductServices, QueryObject } from '@/interfaces/customerProduct-service';
import http from '@/lib/http';

const customerProductServices: CustomerProductServices = {
  getProducts: (queryObject?: QueryObject) => {
    return http.get('/customer/products', { params: queryObject });
  },

  getProductsDetail: (id?:string) => {
    return http.get(`/customer/products/get-by-slug/${id}`);
  },

  // /api/jusystem/customer/products/get-by-slug/{slug}

  getProductsByStyle: (style: string, queryObject?: QueryObject) => {
    return http.get(`/customer/products?styleCode=${style}`, { params: queryObject });
  },
};

export default customerProductServices;
