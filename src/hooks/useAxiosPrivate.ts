import { AxiosRequestConfig } from 'axios';
import { axiosPrivate } from '@/lib/http';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import useRefreshToken from './useRefeshToken';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const auth = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (config.headers && !config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.user?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh, auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
