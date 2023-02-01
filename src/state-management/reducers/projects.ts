import { createReducer } from "deox";

import {
  fetchProjectDesignByDomainAction,
  fetchProjectDesignDetailAction,
  fetchProjectDetailAction,
  fetchProjectsAction,
} from "../actions/projects";
import {
  TFetchProjectDetailResponse,
  TFetchProjectsResponse,
  TFetchProjectDesignDetailResponse,
  TFetchProjectDesignByDomainResponse,
} from "services/identity/projects/types";

type TProjectsState = {
  all?: TFetchProjectsResponse;
  detail?: TFetchProjectDetailResponse;
  designDetail?: TFetchProjectDesignDetailResponse;
  designByDomain?: TFetchProjectDesignByDomainResponse;
};

const initialState: TProjectsState = {
  all: undefined,
  detail: undefined,
  designDetail: undefined,
  designByDomain: undefined,
};

const projectsReducer = createReducer(initialState, (handleAction) => [
  handleAction(fetchProjectsAction.success, (state, { payload }) => ({
    ...state,
    all: payload.projects,
  })),
  handleAction(fetchProjectDetailAction.success, (state, { payload }) => ({
    ...state,
    detail: payload.project,
  })),
  handleAction(fetchProjectDesignDetailAction.success, (state, { payload }) => ({
    ...state,
    designDetail: payload.project,
  })),
  handleAction(fetchProjectDesignByDomainAction.success, (state, { payload }) => ({
    ...state,
    designByDomain: payload.project,
  })),
]);

export default projectsReducer;
