import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";

import {
  createCustomerAction,
  fetchCustomerAction,
  fetchCustomersAction,
  updateCustomerAction,
} from "../actions/customers";
import CustomersInstance from "services/identity/customers";
import {
  TCreateCustomerResponse,
  TFetchCustomerResponse,
  TFetchCustomersResponse,
  TUpdateCustomerResponse,
} from "services/identity/customers/types";

export function* fetchCustomersSaga(
  action: ActionType<typeof fetchCustomersAction.request>
): Generator {
  try {
    const { pageIndex, pageSize, optionalParams, cb } = action.payload;
    const response = yield call(
      CustomersInstance.fetchCustomers,
      pageIndex,
      pageSize,
      optionalParams
    );
    yield put(
      fetchCustomersAction.success(response as TFetchCustomersResponse)
    );
    cb?.();
  } catch (err) {
    yield put(fetchCustomersAction.failure(err));
  }
}

export function* fetchCustomerSaga(
  action: ActionType<typeof fetchCustomerAction.request>
): Generator {
  try {
    const { id, cb } = action.payload;
    const response = yield call(CustomersInstance.fetchCustomer, id);
    yield put(fetchCustomerAction.success(response as TFetchCustomerResponse));
    cb?.();
  } catch (err) {
    yield put(fetchCustomerAction.failure(err));
  }
}

export function* createCustomerSaga(
  action: ActionType<typeof createCustomerAction.request>
): Generator {
  try {
    const { body, cb } = action.payload;
    const response = yield call(CustomersInstance.createCustomer, body);
    yield put(
      createCustomerAction.success(response as TCreateCustomerResponse)
    );
    cb?.();
  } catch (err) {
    yield put(createCustomerAction.failure(err));
  }
}

export function* updateCustomerSaga(
  action: ActionType<typeof updateCustomerAction.request>
): Generator {
  try {
    const { id, body, cb } = action.payload;
    yield call(CustomersInstance.updateCustomer, id, body);
    cb?.();
  } catch (err) {
    yield put(updateCustomerAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchCustomersAction.request.type, fetchCustomersSaga),
    takeLatest(fetchCustomerAction.request.type, fetchCustomerSaga),
    takeLatest(createCustomerAction.request.type, createCustomerSaga),
    takeLatest(updateCustomerAction.request.type, updateCustomerSaga),
  ]);
}
