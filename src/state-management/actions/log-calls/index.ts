import { createActionCreator } from "deox";

import { ELogCallsActions } from "./constants";
import {
  TCreateLogCallBody,
  TFetchLogCallsResponse,
} from "services/identity/log-calls/types";

export const fetchLogCallsAction = {
  request: createActionCreator(
    ELogCallsActions.FETCH_LOG_CALLS_REQUEST,
    (resolve) =>
      (
        type: "lead" | "customer",
        id: string,
        pageIndex: number,
        pageSize: number,
        cb?: () => void
      ) =>
        resolve({ type, id, pageIndex, pageSize, cb })
  ),
  success: createActionCreator(
    ELogCallsActions.FETCH_LOG_CALLS_SUCCESS,
    (resolve) => (logCalls: TFetchLogCallsResponse) => resolve({ logCalls })
  ),
  failure: createActionCreator(
    ELogCallsActions.FETCH_LOG_CALLS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createLogCallAction = {
  request: createActionCreator(
    ELogCallsActions.CREATE_LOG_CALL_REQUEST,
    (resolve) =>
      (
        type: "lead" | "customer",
        id: string,
        body: TCreateLogCallBody,
        cb?: () => void
      ) =>
        resolve({ type, id, body, cb })
  ),
  success: createActionCreator(
    ELogCallsActions.CREATE_LOG_CALL_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    ELogCallsActions.CREATE_LOG_CALL_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};
