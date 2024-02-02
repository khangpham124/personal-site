import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import queryString from 'query-string';
import { getCookie } from 'cookies-next';

const token = getCookie('token')
export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'content-type': 'application/json'
      },
      paramsSerializer: (params) => queryString.stringify(params)
    });

    this.requestInterceptor();
    this.responseInterceptor();
  }
  
  private requestInterceptor = () => {
    this.instance.interceptors.request.use(async (config : any) => {
      // is development mode
      // if (process.env.NODE_ENV === 'development') {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      // }
    });
  };

  private responseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this.handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse): any => ({ data });

  protected handleError = (error: AxiosError): void => {
    throw error;
  };
}
