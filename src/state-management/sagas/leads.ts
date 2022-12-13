import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";

import {
  convertLeadToCustomerAction,
  createLeadAction,
  fetchLeadAction,
  fetchLeadsAction,
  updateLeadAction,
  postLeadAttachmentByIDAction
} from "../actions/leads";
import LeadsInstance from "services/identity/leads";
import {
  TCreateLeadResponse,
  TFetchLeadResponse,
  TFetchLeadsResponse,
  TPostLeadAttachmentByIDResponse
} from "services/identity/leads/types";
import { TCustomer } from "services/identity/customers/types";

export function* fetchLeadsSaga(
  action: ActionType<typeof fetchLeadsAction.request>
): Generator {
  try {
    const { pageIndex, pageSize, companyId, optionalParams, cb } = action.payload;
    const response = yield call(LeadsInstance.fetchLeads, pageIndex, pageSize, companyId ,optionalParams);
    yield put(fetchLeadsAction.success(response as TFetchLeadsResponse));
    cb?.();
  } catch (err) {
    yield put(fetchLeadsAction.failure(err));
  }
}

export function* fetchLeadSaga(
  action: ActionType<typeof fetchLeadAction.request>
): Generator {
  try {
    const { id, cb } = action.payload;
    const response = yield call(LeadsInstance.fetchLead, id);
    yield put(fetchLeadAction.success(response as TFetchLeadResponse));
    cb?.();
  } catch (err) {
    yield put(fetchLeadAction.failure(err));
  }
}

export function* createLeadSaga(
  action: ActionType<typeof createLeadAction.request>
): Generator {
  try {
    const { body, cb } = action.payload;
    const response = yield call(LeadsInstance.createLead, body);
    yield put(createLeadAction.success(response as TCreateLeadResponse));
    cb?.();
  } catch (err) {
    yield put(createLeadAction.failure(err));
  }
}

export function* updateLeadSaga(
  action: ActionType<typeof updateLeadAction.request>
): Generator {
  const { id, body, successCb, failedCb } = action.payload;
  try {
    yield call(LeadsInstance.updateLead, id, body);
    successCb?.();
  } catch (err) {
    yield put(updateLeadAction.failure(err));
    failedCb();
  }
}

export function* convertLeadToCustomerSaga(
  action: ActionType<typeof convertLeadToCustomerAction.request>
): Generator {
  const { id, cb } = action.payload;
  try {
    const response = yield call(LeadsInstance.convertToCustomer, id);
    yield put(convertLeadToCustomerAction.success());
    cb?.(response as TCustomer);
  } catch (err) {
    yield put(convertLeadToCustomerAction.failure(err));
  }
}

export function* postLeadAttachmentByIDSaga(
  action: ActionType<typeof postLeadAttachmentByIDAction.request>
): Generator {
  const { id, body, cb } = action.payload;
  try {
    const response = yield call(LeadsInstance.postLeadAttachmentByID, id, body);
    yield put(postLeadAttachmentByIDAction.success(response as TPostLeadAttachmentByIDResponse));
    cb?.();
  } catch (err) {
    yield put(postLeadAttachmentByIDAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchLeadsAction.request.type, fetchLeadsSaga),
    takeLatest(fetchLeadAction.request.type, fetchLeadSaga),
    takeLatest(createLeadAction.request.type, createLeadSaga),
    takeLatest(updateLeadAction.request.type, updateLeadSaga),
    takeLatest(convertLeadToCustomerAction.request.type, convertLeadToCustomerSaga),
    takeLatest(postLeadAttachmentByIDAction.request.type, postLeadAttachmentByIDSaga),
  ]);
}
