import { all, fork } from "redux-saga/effects";

import leadsSaga from "./leads";
import customersSaga from "./customers";
import logCallsSaga from "./log-calls";
import projectsSaga from "./projects";
import commentsSaga from "./comments";
import analyticsSaga from "./analytics";
import productsSaga from "./products";

const rootSaga = function* root(): Generator {
  yield all([
    fork(leadsSaga),
    fork(customersSaga),
    fork(logCallsSaga),
    fork(projectsSaga),
    fork(commentsSaga),
    fork(analyticsSaga),
    fork(productsSaga),
  ]);
};

export default rootSaga;
