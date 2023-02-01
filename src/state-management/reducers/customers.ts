import { createReducer } from 'deox';

import { fetchCustomerAction, fetchCustomersAction } from '../actions/customers';
import { TFetchCustomerResponse, TFetchCustomersResponse } from 'services/identity/customers/types';

type TCustomersState = {
  data?: TFetchCustomersResponse;
  customerById?: TFetchCustomerResponse;
};

const initialState: TCustomersState = {
  data: undefined,
  customerById: undefined,
};

const customersReducer = createReducer(initialState, (handleAction) => [
  handleAction(fetchCustomersAction.success, (state, { payload }) => ({
    ...state,
    data: payload.customers,
  })),
  handleAction(fetchCustomerAction.success, (state, { payload }) => ({
    ...state,
    customerById: payload.customer,
  })),
]);

export default customersReducer;
