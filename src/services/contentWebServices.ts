import { ContentWebServices, QueryObject } from '@/interfaces/contentWeb-service';
// import { CustomerProductServices } from '@/interfaces/customerProduct-service';
import http from '@/lib/http';

const contentWebServices: ContentWebServices = {
  getSlider: (queryObject?: QueryObject) => {
    return http.get('/slider', { params: queryObject });
  },
};

export default contentWebServices;
