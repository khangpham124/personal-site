import { createActionCreator } from "deox";

import { ECustomersActions } from "./constants";
import { TCreateCustomerBody, TCreateCustomerResponse, TFetchCustomerResponse, TFetchCustomersResponse, TUpdateCustomerBody, TUpdateCustomerResponse } from "services/identity/customers/types";

export const fetchCustomersAction = {
  request: createActionCreator(
    ECustomersActions.FETCH_CUSTOMERS_REQUEST,
    (resolve) => (pageIndex: number, pageSize: number, companyId: string, optionalParams?: any, cb?: () => void) =>
      resolve({ pageIndex, pageSize, companyId,  optionalParams, cb })
  ),
  success: createActionCreator(
    ECustomersActions.FETCH_CUSTOMERS_SUCCESS,
    (resolve) => (customers: TFetchCustomersResponse) => resolve({ customers })
  ),
  failure: createActionCreator(
    ECustomersActions.FETCH_CUSTOMERS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchCustomerAction = {
  request: createActionCreator(
    ECustomersActions.FETCH_CUSTOMER_REQUEST,
    (resolve) => (id: string, cb?: () => void) =>
      resolve({ id, cb })
  ),
  success: createActionCreator(
    ECustomersActions.FETCH_CUSTOMER_SUCCESS,
    (resolve) => (customer: TFetchCustomerResponse) => resolve({ customer })
  ),
  failure: createActionCreator(
    ECustomersActions.FETCH_CUSTOMER_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createCustomerAction = {
  request: createActionCreator(
    ECustomersActions.CREATE_CUSTOMER_REQUEST,
    (resolve) => (body: TCreateCustomerBody, cb?: () => void) =>
      resolve({ body, cb })
  ),
  success: createActionCreator(
    ECustomersActions.CREATE_CUSTOMER_SUCCESS,
    (resolve) => (customer: TCreateCustomerResponse) => resolve({ customer })
  ),
  failure: createActionCreator(
    ECustomersActions.CREATE_CUSTOMER_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const updateCustomerAction = {
  request: createActionCreator(
    ECustomersActions.UPDATE_CUSTOMER_REQUEST,
    (resolve) => (id: string, body: TUpdateCustomerBody, cb?: () => void) =>
      resolve({ id, body, cb })
  ),
  success: createActionCreator(
    ECustomersActions.UPDATE_CUSTOMER_SUCCESS,
    (resolve) => (customer: TUpdateCustomerResponse) => resolve({ customer })
  ),
  failure: createActionCreator(
    ECustomersActions.UPDATE_CUSTOMER_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};
