import { createReducer } from "deox";

import { fetchCommentsByIdAction } from "../actions/comments";
import { TFetchCommentsByIdResponse } from "services/identity/comments/types";

type TCommentsState = {
  fetchCommentsByIdResponse?: TFetchCommentsByIdResponse;
};

const initialState: TCommentsState = {
  fetchCommentsByIdResponse: undefined,
};

const commentssReducer = createReducer(initialState, (handleAction) => [
  handleAction(fetchCommentsByIdAction.success, (state, { payload }) => ({
    ...state,
    fetchCommentsByIdResponse: payload.comments,
  })),
]);

export default commentssReducer;
