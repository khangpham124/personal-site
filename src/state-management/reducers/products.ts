import { createReducer } from 'deox';

import { fetchProductAction, fetchProductsAction } from '../actions/products';
import { TFetchProductsResponse, TFetchProductResponse } from 'services/identity/products/types';

type TProductsState = {
  data?: TFetchProductsResponse;
  productById?: TFetchProductResponse;
};

const initialState: TProductsState = {
  data: undefined,
  productById: undefined,
};

const leadsReducer = createReducer(initialState, (handleAction) => [
  handleAction(fetchProductsAction.success, (state, { payload }) => ({
    ...state,
    data: payload.products,
  })),
  handleAction(fetchProductAction.success, (state, { payload }) => ({
    ...state,
    productById: payload.product,
  })),
]);

export default leadsReducer;
