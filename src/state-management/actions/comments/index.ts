import { createActionCreator } from "deox";

import { ECommentsActions } from "./constants";
import { TFetchCommentsByIdParams, TFetchCommentsByIdResponse } from "services/identity/comments/types";

export const fetchCommentsByIdAction = {
  request: createActionCreator(
    ECommentsActions.FETCH_COMMENTS_BY_ID_REQUEST,
    (resolve) =>
      (
        id: string,
        params: TFetchCommentsByIdParams,
        cb?: () => void
      ) =>
        resolve({ id, params, cb })
  ),
  success: createActionCreator(
    ECommentsActions.FETCH_COMMENTS_BY_ID_SUCCESS,
    (resolve) => (comments: TFetchCommentsByIdResponse) => resolve({ comments })
  ),
  failure: createActionCreator(
    ECommentsActions.FETCH_COMMENTS_BY_ID_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createCommentAction = {
  request: createActionCreator(
    ECommentsActions.CREATE_COMMENT_REQUEST,
    (resolve) =>
      (
        leadId: string,
        body: { content: string },
        cb?: () => void
      ) =>
        resolve({ leadId, body, cb })
  ),
  success: createActionCreator(
    ECommentsActions.CREATE_COMMENT_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    ECommentsActions.CREATE_COMMENT_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};
