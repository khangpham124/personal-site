import { ProductServices, QueryObject } from '@/interfaces/product-service';
import http from '@/lib/http';

const productService: ProductServices = {
  getProducts: (queryObj: QueryObject) => {
    return http.get(`products`, {
      params: {
        page: queryObj.page || undefined,
      },
    });
  },

  // getProduct: (slug: string) => {
  //   return productsJson.find((product) => product.slug === slug);
  // }
};

export default productService;
