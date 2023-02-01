import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";

import { fetchProductAction, fetchProductsAction, updateProductAction, createProductAction } from "../actions/products";
import ProductsInstance from "services/identity/products";
import { TFetchProductResponse, TFetchProductsResponse, TCreateProductResponse } from "services/identity/products/types";

export function* fetchProductsSaga(
  action: ActionType<typeof fetchProductsAction.request>
): Generator {
  try {
    const { pageIndex, pageSize, optionalParams, cb } = action.payload;
    const response = yield call(ProductsInstance.fetchProducts, pageIndex, pageSize, optionalParams);
    yield put(fetchProductsAction.success(response as TFetchProductsResponse));
    cb?.();
  } catch (err) {
    yield put(fetchProductsAction.failure(err));
  }
}

export function* fetchProductSaga(
  action: ActionType<typeof fetchProductAction.request>
): Generator {
  try {
    const { id, cb } = action.payload;
    const response = yield call(ProductsInstance.fetchProduct, id);
    yield put(fetchProductAction.success(response as TFetchProductResponse));
    cb?.();
  } catch (err) {
    yield put(fetchProductAction.failure(err));
  }
}

export function* updateProductSaga(
  action: ActionType<typeof updateProductAction.request>
): Generator {
  const { id, body, successCb, failedCb } = action.payload;
  try {
    yield call(ProductsInstance.updateProduct, id, body);
    successCb?.();
  } catch (err) {
    yield put(updateProductAction.failure(err));
    failedCb();
  }
}

export function* createProductSaga(
  action: ActionType<typeof createProductAction.request>
): Generator {
  try {
    const { body, cb } = action.payload;
    const response = yield call(ProductsInstance.createProduct, body);
    yield put(createProductAction.success(response as TCreateProductResponse));
    cb?.();
  } catch (err) {
    yield put(createProductAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchProductsAction.request.type, fetchProductsSaga),
    takeLatest(fetchProductAction.request.type, fetchProductSaga),
    takeLatest(updateProductAction.request.type, updateProductSaga),
    takeLatest(createProductAction.request.type, createProductSaga),
  ]);
}
