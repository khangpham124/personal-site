export interface IResponse {
  data?: any;
  error?: any;
  attachments?: any;
  items?: any;
  totalItems?:number;
  message?: string;
}

export interface IConfig {
  baseURL?: string;
  headers?: { Authorization?: string };
  params?: object;
  onUploadProgress?: any;
}
