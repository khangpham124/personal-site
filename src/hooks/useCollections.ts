import { useQuery } from '@tanstack/react-query';
import CollectionsServices from '@/services/collectionsServices';
import { QueryObject } from '@/interfaces/collection-service';

export const useCollections = (queryObject?: QueryObject) => {
  return useQuery(['collections'], async () => {
    const response = await CollectionsServices.getCollections(queryObject);
    return response.data;
  });
  
};

export const useLastestCollections = () => {
  return useQuery(['collectionsLastest'], async () => {
    const response = await CollectionsServices.getLastestCollections();
    return response.data;
  });
  
};
