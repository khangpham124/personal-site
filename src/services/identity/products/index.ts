import HttpClient from '../../../utils/axios/instance';
import { catchAxiosError } from "../../../utils/axios/error";
import { IResponse, IConfig } from "../../../utils/axios/entities";
import {
  TFetchProductsResponse,
  TFetchProductResponse,
  TUpdateProductBody,
  TCreateProductBody,
  TCreateProductResponse,
  TProduct
} from "./types";
import { crmPlatform } from "src/services/identity";

class Products extends HttpClient {
  fetchProducts = async (
    pageIndex: number,
    pageSize: number,
    optionalParams: any,
    companyId?: string,
    projectID?:string
  ): Promise<IResponse> => {
    const response = await this.instance.get(`${crmPlatform}/products?pageIndex=${pageIndex}&pageSize=${pageSize}&companyId=${companyId}${projectID ? `&projectId=${projectID}` : ``}`);
    return response.data;
  };

  fetchProduct = async (id: string): Promise<IResponse> => {
    const response = await this.instance.get(`${crmPlatform}/products/${id}`);
    return response.data;
  };

  createProduct = async (
    body: TCreateProductBody
  ): Promise<IResponse> => {
    const response = await this.instance.post(`${crmPlatform}/products`, body);
    return response.data;
  };

  updateProduct = async (
    id: string,
    body: TUpdateProductBody
  ): Promise<TFetchProductResponse> => {
    const response = await this.instance.patch(`${crmPlatform}/products/${id}`, body);
    return response.data;
  };

  //   convertToCustomer = async (id: string): Promise<TConvertToCustomerResponse> => {
  //     const response = await this.instance.get(`/leads/${id}/convert-to-customer`);
  //     return response.data;
  //   };

  exportProduct = async (id: string): Promise<TFetchProductsResponse> => {
    const response = await this.instance.get(`${crmPlatform}/products/${id}/export`);
    return response.data;
  };
}

const ProductsInstance = new Products();
export default ProductsInstance;


export class ProductstAPI extends HttpClient {
  public fetchProducts = async (
    pageIndex: number,
    pageSize: number,
    optionalParams: any,
    companyId?: string
  ): Promise<IResponse> => {
    const response = await this.instance.get(`${crmPlatform}/products?pageIndex=${pageIndex}&pageSize=${pageSize}&companyId=${companyId}&sort={ "createdAt": "DESC" }`);
    return response.data;
  };

  public exportProduct = async (body: any): Promise<TFetchProductsResponse> => {
    const response = await this.instance.post(`${crmPlatform}/products/export`, body);
    return response.data;
  };

  public getDetailProduct = async (id: string): Promise<TProduct> => {
    const response = await this.instance.get(`${crmPlatform}/products/${id}`);
    return response.data;
  };

  public createProduct = async (
    body: TCreateProductBody
  ): Promise<IResponse> => {
    const response = await this.instance.post(`${crmPlatform}/products`, body);
    return response.data;
  };

  public updateProduct = async (
    body: TUpdateProductBody,
    id:string
  ): Promise<IResponse> => {
    const response = await this.instance.patch(`${crmPlatform}/products/${id}`, body);
    return response.data;
  };
}
