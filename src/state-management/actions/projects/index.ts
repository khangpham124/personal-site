import { createActionCreator } from "deox";

import { EProjectsActions } from "./constants";
import {
  TCreateProjectBody,
  TFetchProjectDetailResponse,
  TFetchProjectsResponse,
  TUpdateProjectBody,
  TCreateProjectDesignBody,
  TFetchProjectDesignDetailResponse,
  TFetchProjectDesignByDomainResponse,
  TCreateProjectResponse,
} from "services/identity/projects/types";

export const fetchProjectsAction = {
  request: createActionCreator(
    EProjectsActions.FETCH_PROJECTS_REQUEST,
    (resolve) => (pageIndex: number, pageSize: number, companyId: string, cb?: () => void) =>
      resolve({ pageIndex, pageSize, companyId, cb })
  ),
  success: createActionCreator(
    EProjectsActions.FETCH_PROJECTS_SUCCESS,
    (resolve) => (projects: TFetchProjectsResponse) => resolve({ projects })
  ),
  failure: createActionCreator(
    EProjectsActions.FETCH_PROJECTS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchProjectDetailAction = {
  request: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DETAIL_REQUEST,
    (resolve) => (id: string, cb?: () => void) => resolve({ id, cb })
  ),
  success: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DETAIL_SUCCESS,
    (resolve) => (project: TFetchProjectDetailResponse) => resolve({ project })
  ),
  failure: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DETAIL_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createProjectAction = {
  request: createActionCreator(
    EProjectsActions.CREATE_PROJECT_REQUEST,
    (resolve) =>
      (
        body: TCreateProjectBody,
        cb?: (project: TCreateProjectResponse) => void
      ) =>
        resolve({ body, cb })
  ),
  success: createActionCreator(
    EProjectsActions.CREATE_PROJECT_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    EProjectsActions.CREATE_PROJECT_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const validateDomainAction = {
  request: createActionCreator(
    EProjectsActions.VALIDATE_DOMAIN,
    (resolve) => (id: string, cb?: () => void) =>
      resolve({ id, cb })
  ),
  success: createActionCreator(
    EProjectsActions.VALIDATE_DOMAIN_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    EProjectsActions.VALIDATE_DOMAIN_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const updateProjectAction = {
  request: createActionCreator(
    EProjectsActions.UPDATE_PROJECT_REQUEST,
    (resolve) => (id: string, body: TUpdateProjectBody, cb?: () => void) =>
      resolve({ id, body, cb })
  ),
  success: createActionCreator(
    EProjectsActions.UPDATE_PROJECT_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    EProjectsActions.UPDATE_PROJECT_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createProjectDesignAction = {
  request: createActionCreator(
    EProjectsActions.CREATE_PROJECT_DESIGN_REQUEST,
    (resolve) =>
      (id: string, body: TCreateProjectDesignBody, cb?: () => void) =>
        resolve({ id, body, cb })
  ),
  success: createActionCreator(
    EProjectsActions.CREATE_PROJECT_DESIGN_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    EProjectsActions.CREATE_PROJECT_DESIGN_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchProjectDesignDetailAction = {
  request: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DESIGN_REQUEST,
    (resolve) => (id: string, cb?: () => void) => resolve({ id, cb })
  ),
  success: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DESIGN_SUCCESS,
    (resolve) => (project: TFetchProjectDesignDetailResponse) =>
      resolve({ project })
  ),
  failure: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DESIGN_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchProjectDesignByDomainAction = {
  request: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DESIGN_BY_DOMAIN_REQUEST,
    (resolve) => (domainName: string, cb?: () => void) =>
      resolve({ domainName, cb })
  ),
  success: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DESIGN_BY_DOMAIN_SUCCESS,
    (resolve) => (project: TFetchProjectDesignByDomainResponse) =>
      resolve({ project })
  ),
  failure: createActionCreator(
    EProjectsActions.FETCH_PROJECT_DESIGN_BY_DOMAIN_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};
