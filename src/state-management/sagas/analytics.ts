import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";
import {
  fetchAnalyticsLeadsAction,
  fetchAnalyticsLogcallsAction,
  fetchAnalyticsCustomersAction,
  fetchAnalyticsTotalDurationAction,
  fetchAnalyticsConversionRateAction,
} from "../actions/analytics";
import AnalyticsInstance from "services/identity/analytics";
import {
  TAnalyticsResponse,
  TConversionRateResponse,
} from "services/identity/analytics/types";

export function* fetchAnalyticsLeadsSaga(
  action: ActionType<typeof fetchAnalyticsLeadsAction.request>
): Generator {
  try {
    const { fromDate, toDate, dimension, entity, question, cb } =
      action.payload;
    const response = yield call(
      AnalyticsInstance.fetchAnalytics,
      fromDate,
      toDate,
      dimension,
      entity,
      question
    );
    yield put(
      fetchAnalyticsLeadsAction.success(response as TAnalyticsResponse)
    );
    cb?.();
  } catch (err) {
    yield put(fetchAnalyticsLeadsAction.failure(err));
  }
}

export function* fetchAnalyticsLogcallsSaga(
  action: ActionType<typeof fetchAnalyticsLogcallsAction.request>
): Generator {
  try {
    const { fromDate, toDate, dimension, entity, question, cb } =
      action.payload;
    const response = yield call(
      AnalyticsInstance.fetchAnalytics,
      fromDate,
      toDate,
      dimension,
      entity,
      question
    );
    yield put(
      fetchAnalyticsLogcallsAction.success(response as TAnalyticsResponse)
    );
    cb?.();
  } catch (err) {
    yield put(fetchAnalyticsLogcallsAction.failure(err));
  }
}

export function* fetchAnalyticsCustomersSaga(
  action: ActionType<typeof fetchAnalyticsCustomersAction.request>
): Generator {
  try {
    const { fromDate, toDate, dimension, entity, question, cb } =
      action.payload;
    const response = yield call(
      AnalyticsInstance.fetchAnalytics,
      fromDate,
      toDate,
      dimension,
      entity,
      question
    );
    yield put(
      fetchAnalyticsCustomersAction.success(response as TAnalyticsResponse)
    );
    cb?.();
  } catch (err) {
    yield put(fetchAnalyticsCustomersAction.failure(err));
  }
}

export function* fetchAnalyticsTotalDurationSaga(
  action: ActionType<typeof fetchAnalyticsTotalDurationAction.request>
): Generator {
  try {
    const { fromDate, toDate, dimension, entity, question, cb } =
      action.payload;
    const response = yield call(
      AnalyticsInstance.fetchAnalytics,
      fromDate,
      toDate,
      dimension,
      entity,
      question
    );
    yield put(
      fetchAnalyticsTotalDurationAction.success(response as TAnalyticsResponse)
    );
    cb?.();
  } catch (err) {
    yield put(fetchAnalyticsTotalDurationAction.failure(err));
  }
}

export function* fetchAnalyticsConversionRateSaga(
  action: ActionType<typeof fetchAnalyticsConversionRateAction.request>
): Generator {
  try {
    const { fromDate, toDate, dimension, entity, question, cb } =
      action.payload;
    const response = yield call(
      AnalyticsInstance.fetchAnalytics,
      fromDate,
      toDate,
      dimension,
      entity,
      question
    );
    yield put(
      fetchAnalyticsConversionRateAction.success(
        response as TConversionRateResponse
      )
    );
    cb?.();
  } catch (err) {
    yield put(fetchAnalyticsConversionRateAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchAnalyticsLeadsAction.request.type, fetchAnalyticsLeadsSaga),
    takeLatest(
      fetchAnalyticsLogcallsAction.request.type,
      fetchAnalyticsLogcallsSaga
    ),
    takeLatest(
      fetchAnalyticsCustomersAction.request.type,
      fetchAnalyticsCustomersSaga
    ),
    takeLatest(
      fetchAnalyticsTotalDurationAction.request.type,
      fetchAnalyticsTotalDurationSaga
    ),
    takeLatest(
      fetchAnalyticsConversionRateAction.request.type,
      fetchAnalyticsConversionRateSaga
    ),
  ]);
}
