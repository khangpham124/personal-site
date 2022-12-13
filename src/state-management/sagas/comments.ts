import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";

import { createCommentAction, fetchCommentsByIdAction } from "../actions/comments";
import CommentsInstance from "services/identity/comments";
import { TFetchCommentsByIdResponse } from "services/identity/comments/types";

export function* fetcCommentsByIdSaga(
  action: ActionType<typeof fetchCommentsByIdAction.request>
): Generator {
  try {
    const { id, params, cb } = action.payload;
    const response = yield call(CommentsInstance.fetchCommentsById, id, params);
    yield put(fetchCommentsByIdAction.success(response as TFetchCommentsByIdResponse));
    cb?.();
  } catch (err) {
    yield put(fetchCommentsByIdAction.failure(err));
  }
}

export function* createCommentSaga(
  action: ActionType<typeof createCommentAction.request>
): Generator {
  try {
    const { leadId, body, cb } = action.payload;
    yield call(CommentsInstance.createComment, leadId, body);
    yield put(createCommentAction.success());
    cb?.();
  } catch (err) {
    yield put(createCommentAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchCommentsByIdAction.request.type, fetcCommentsByIdSaga),
    takeLatest(createCommentAction.request.type, createCommentSaga),
  ]);
}
