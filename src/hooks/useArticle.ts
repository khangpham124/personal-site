import { useQuery } from '@tanstack/react-query';
import customerArticles from '@/services/customerArticles';
import { QueryObject } from '@/interfaces/customerArticles-service';

export const useArticles = (queryObject?: QueryObject) => {
  return useQuery(['articals'], async () => {
    const response = await customerArticles.getArticles(queryObject);
    return response.data;
  });
};

export const useArticlesByPost = (type: number, queryObject?: QueryObject) => {
  return useQuery(['articals'], async () => {
    const response = await customerArticles.getArticleByPost(type, queryObject);
    return response.data;
  });
};

export const useArticlesDetail = (id: string) => {
  return useQuery(['articals'], async () => {
    const response = await customerArticles.getArticleDetail(id);
    return response.data;
  });
};

