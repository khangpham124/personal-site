import { combineReducers } from 'redux';

import loading from './status/loading';
import success from './status/success';
import error from './status/error';

import leads from './leads';
import customers from './customers';
import logCalls from './log-calls';
import projects from './projects';
import comments from './comments';
import analytics from './analytics';
import products from './products';

const rootReducer = combineReducers({
  loading,
  success,
  error,
  leads,
  customers,
  logCalls,
  projects,
  comments,
  analytics,
  products,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
