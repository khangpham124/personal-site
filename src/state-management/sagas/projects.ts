import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionType } from "deox";

import {
  createProjectAction,
  fetchProjectDetailAction,
  fetchProjectsAction,
  updateProjectAction,
  createProjectDesignAction,
  fetchProjectDesignDetailAction,
  fetchProjectDesignByDomainAction,
  validateDomainAction
} from "../actions/projects";
import ProjectsInstance from "services/identity/projects";
import {
  TFetchProjectDesignByDomainResponse,
  TFetchProjectDesignDetailResponse,
  TFetchProjectDetailResponse,
  TFetchProjectsResponse,
  TProject,
} from "services/identity/projects/types";

export function* fetchProjectsSaga(
  action: ActionType<typeof fetchProjectsAction.request>
): Generator {
  try {
    const { pageIndex, pageSize, cb } = action.payload;
    const response = yield call(
      ProjectsInstance.fetchProjects,
      pageIndex,
      pageSize
    );
    yield put(fetchProjectsAction.success(response as TFetchProjectsResponse));
    cb?.();
  } catch (err) {
    yield put(fetchProjectsAction.failure(err));
  }
}

export function* fetchProjectDetailSaga(
  action: ActionType<typeof fetchProjectDetailAction.request>
): Generator {
  try {
    const { id, cb } = action.payload;
    const response = yield call(ProjectsInstance.fetchProjectDetail, id);
    yield put(
      fetchProjectDetailAction.success(response as TFetchProjectDetailResponse)
    );
    cb?.();
  } catch (err) {
    yield put(fetchProjectDetailAction.failure(err));
  }
}

export function* createProjectSaga(
  action: ActionType<typeof createProjectAction.request>
): Generator {
  try {
    const { body, cb } = action.payload;
    const response = yield call(ProjectsInstance.createProject, body);
    cb?.(response as TProject);
  } catch (err) {
    yield put(createProjectAction.failure(err));
  }
}

export function* updateProjectSaga(
  action: ActionType<typeof updateProjectAction.request>
): Generator {
  try {
    const { id, body, cb } = action.payload;
    yield call(ProjectsInstance.updateProject, id, body);
    cb?.();
  } catch (err) {
    yield put(updateProjectAction.failure(err));
  }
}

export function* validateDomainSaga(
  action: ActionType<typeof validateDomainAction.request>
): Generator {
  try {
    const { id, cb } = action.payload;
    yield call(ProjectsInstance.validateDomain, id);
    cb?.();
  } catch (err) {
    yield put(validateDomainAction.failure(err));
  }
}

export function* createProjectDesignSaga(
  action: ActionType<typeof createProjectDesignAction.request>
): Generator {
  try {
    const { id, body, cb } = action.payload;
    yield call(ProjectsInstance.createProjectDesign, id, body);
    yield put(createProjectDesignAction.success());
    cb?.();
  } catch (err) {
    yield put(createProjectDesignAction.failure(err));
  }
}

export function* fetchProjectDesignDetailSaga(
  action: ActionType<typeof fetchProjectDesignDetailAction.request>
): Generator {
  try {
    const { id, cb } = action.payload;
    const response = yield call(ProjectsInstance.fetchProjectDesignDetail, id);
    yield put(
      fetchProjectDesignDetailAction.success(
        response as TFetchProjectDesignDetailResponse
      )
    );
    cb?.();
  } catch (err) {
    yield put(fetchProjectDesignDetailAction.failure(err));
  }
}

export function* fetchProjectDesignByDomainSaga(
  action: ActionType<typeof fetchProjectDesignByDomainAction.request>
): Generator {
  try {
    const { domainName, cb } = action.payload;
    const response = yield call(
      ProjectsInstance.fetchProjectDesignByDomain,
      domainName
    );
    yield put(
      fetchProjectDesignByDomainAction.success(
        response as TFetchProjectDesignByDomainResponse
      )
    );
    cb?.();
  } catch (err) {
    yield put(fetchProjectDesignByDomainAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([
    takeLatest(fetchProjectsAction.request.type, fetchProjectsSaga),
    takeLatest(fetchProjectDetailAction.request.type, fetchProjectDetailSaga),
    takeLatest(createProjectAction.request.type, createProjectSaga),
    takeLatest(updateProjectAction.request.type, updateProjectSaga),
    takeLatest(validateDomainAction.request.type, validateDomainSaga),
    takeLatest(createProjectDesignAction.request.type, createProjectDesignSaga),
    takeLatest(
      fetchProjectDesignDetailAction.request.type,
      fetchProjectDesignDetailSaga
    ),
    takeLatest(
      fetchProjectDesignByDomainAction.request.type,
      fetchProjectDesignByDomainSaga
    ),
  ]);
}
