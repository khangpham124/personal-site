import { createReducer } from "deox";

import {
  fetchLogCallsAction,
} from "../actions/log-calls";
import {
  TFetchLogCallsResponse,
} from "services/identity/log-calls/types";

type TLogCallsState = {
  all?: TFetchLogCallsResponse;
};

const initialState: TLogCallsState = {
  all: undefined,
};

const logCallsReducer = createReducer(initialState, (handleAction) => [
  handleAction(fetchLogCallsAction.success, (state, { payload }) => ({
    ...state,
    all: payload.logCalls,
  })),
]);

export default logCallsReducer;
