import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import queryString from 'query-string';

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
        // config.headers.Authorization = `Bearer ${REACT_APP_TOKEN}`;
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

export type ErrorResponse = {
  headers: any;
  message: string;
  status: number;
};

export function catchAxiosError(err: AxiosError): object {
  // Something happened in setting up the request that triggered an Error
  const error = {
    headers: null,
    message:
      'Something happened in setting up the request that triggered an Error',
    status: 0
  } as ErrorResponse;

  
  if (err && err.response) {
    error.headers = err.response.headers;
    error.message = err.response.data.message;
    error.status = err.response.status;
    console.log(error.status)
    // if(error.status === 401) {
    //   localStorage.removeItem('user');
    //   window.location.href = '/login';
    // }
    // if(error.status === 403) {
    //   window.location.href = '/permission-denied';
    // }
  } else if (err && err.request) {
    error.headers = err.request.headers;
    error.message = 'The request was made, but no response was received';
    console.error(err.request);
  }

  return { error };
}
