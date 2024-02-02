import { useQuery } from '@tanstack/react-query';
import ContentWebServices from '@/services/contentWebServices';
import { QueryObject } from '@/interfaces/contentWeb-service';

export const useContentWeb = (queryObject?: QueryObject) => {
  return useQuery(['slider'], async () => {
    const response = await ContentWebServices.getSlider(queryObject);
    return response.data;
  });
};
