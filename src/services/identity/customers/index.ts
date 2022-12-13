
import HttpClient from '../../../utils/axios/instance';
import {
  TCreateCustomerBody,
  TCreateCustomerResponse,
  TFetchCustomersResponse,
  TFetchCustomerResponse,
  TUpdateCustomerBody,
  TUpdateCustomerResponse,
} from "./types";
import { crmPlatform } from "src/services/identity";
import { objectToQueryString } from 'utils/helper/objectToQueryString';

class Customers extends HttpClient {
  fetchCustomers = async (
    pageIndex: number,
    pageSize: number,
    companyId: string,
    optionalParams?: any
  ): Promise<TFetchCustomersResponse> => {
    const params = { pageIndex, pageSize, companyId, ...optionalParams };
    const response = await this.instance.get(`${crmPlatform}/customers?${objectToQueryString(params)}`);
    return response.data;
  };

  fetchCustomer = async (id: string): Promise<TFetchCustomerResponse> => {
    const response = await this.instance.get(`${crmPlatform}/customers/${id}`);
    return response.data;
  };

  fetchInterestingProductsByCustomerId = async (
    customerId: string,
    pageIndex: number = 1,
    pageSize: number = 10
  ): Promise<any> => {
    const response = await this.instance.get(
      `${crmPlatform}/customers/${customerId}/interesting-products?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    return response.data;
  };

  addInterestingProductsByCustomerId = async (
    customerId: string,
    productId: string
  ): Promise<any> => {
    const response = await this.instance.post(
      `${crmPlatform}/customers/${customerId}/interesting-products/${productId}`
    );
    return response.data;
  };

  deleteInterestingProductsByCustomerId = async (
    customerId: string,
    productId: string
  ): Promise<any> => {
    const response = await this.instance.delete(
      `${crmPlatform}/customers/${customerId}/interesting-products/${productId}`
    );
    return response.data;
  };

  createCustomer = async (
    body: TCreateCustomerBody
  ): Promise<TCreateCustomerResponse> => {
    const response = await this.instance.post(`${crmPlatform}/customers`, body);
    return response.data;
  };

  updateCustomer = async (
    id: string,
    body: TUpdateCustomerBody
  ): Promise<TUpdateCustomerResponse> => {
    const response = await this.instance.patch(`${crmPlatform}/customers/${id}`, body);
    return response.data;
  };

  deleteCustomer = async (
    IDCustomer: string
  ): Promise<TCreateCustomerResponse> => {
    const response = await this.instance.delete(`${crmPlatform}/customers/${IDCustomer}`);
    return response.data;
  };

  exportCustomer = async (
    IDCustomer: any
  ): Promise<TFetchCustomersResponse> => {
    const response = await this.instance.get(
      `${crmPlatform}/customers/${IDCustomer}/export`
    );
    return response.data;
  };
}

const CustomersInstance = new Customers();
export default CustomersInstance;
