import { createActionCreator } from "deox";

import { EProductsActions } from "./constants";
import { TFetchProductResponse, TFetchProductsResponse, TUpdateProductBody, TCreateProductBody, TCreateProductResponse } from "services/identity/products/types";

export const fetchProductsAction = {
  request: createActionCreator(
    EProductsActions.FETCH_PRODUCTS_REQUEST,
    (resolve) => (pageIndex: number, pageSize: number, optionalParams?: any,  cb?: () => void) =>
      resolve({ pageIndex, pageSize, optionalParams, cb })
  ),
  success: createActionCreator(
    EProductsActions.FETCH_PRODUCTS_SUCCESS,
    (resolve) => (products: TFetchProductsResponse) => resolve({ products })
  ),
  failure: createActionCreator(
    EProductsActions.FETCH_PRODUCTS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchProductAction = {
  request: createActionCreator(
    EProductsActions.FETCH_PRODUCT_REQUEST,
    (resolve) => (id: string, cb?: () => void) => resolve({ id, cb })
  ),
  success: createActionCreator(
    EProductsActions.FETCH_PRODUCT_SUCCESS,
    (resolve) => (product: TFetchProductResponse) => resolve({ product })
  ),
  failure: createActionCreator(
    EProductsActions.FETCH_PRODUCT_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const updateProductAction = {
  request: createActionCreator(
    EProductsActions.UPDATE_PRODUCT_REQUEST,
    (resolve) =>
      (
        id: string,
        body: TUpdateProductBody,
        successCb?: () => void,
        failedCb?: () => void
      ) =>
        resolve({ id, body, successCb, failedCb })
  ),
  success: createActionCreator(
    EProductsActions.UPDATE_PRODUCT_SUCCESS,
    (resolve) => (product: TFetchProductResponse) => resolve({ product })
  ),
  failure: createActionCreator(
    EProductsActions.UPDATE_PRODUCT_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createProductAction = {
  request: createActionCreator(
    EProductsActions.CREATE_PRODUCT_REQUEST,
    (resolve) => (body: TCreateProductBody, cb?: () => void) =>
      resolve({ body, cb })
  ),
  success: createActionCreator(
    EProductsActions.CREATE_PRODUCT_SUCCESS,
    (resolve) => (product: TCreateProductResponse) => resolve({ product })
  ),
  failure: createActionCreator(
    EProductsActions.CREATE_PRODUCT_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};