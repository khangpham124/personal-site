import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";

import {
  createLogCallAction,
  fetchLogCallsAction,
} from "../actions/log-calls";
import LogCallsInstance from "services/identity/log-calls";
import {
  TFetchLogCallsResponse,
} from "services/identity/log-calls/types";

export function* fetchLogCallsSaga(
  action: ActionType<typeof fetchLogCallsAction.request>
): Generator {
  try {
    const { type, id, pageIndex, pageSize, cb } = action.payload;
    const response = yield call(
      LogCallsInstance.fetchLogCalls,
      type,
      id,
      pageIndex,
      pageSize
    );
    yield put(fetchLogCallsAction.success(response as TFetchLogCallsResponse));
    cb?.();
  } catch (err) {
    yield put(fetchLogCallsAction.failure(err));
  }
}

export function* createLogCallSaga(
  action: ActionType<typeof createLogCallAction.request>
): Generator {
  try {
    const { type, id, body, cb } = action.payload;
    yield call(LogCallsInstance.createLogCall, type, id, body);
    cb?.();
  } catch (err) {
    yield put(createLogCallAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchLogCallsAction.request.type, fetchLogCallsSaga),
    takeLatest(createLogCallAction.request.type, createLogCallSaga),
  ]);
}
