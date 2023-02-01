import { createReducer } from "deox";
import {
  fetchAnalyticsLeadsAction,
  fetchAnalyticsLogcallsAction,
  fetchAnalyticsCustomersAction,
  fetchAnalyticsTotalDurationAction,
  fetchAnalyticsConversionRateAction,
} from "../actions/analytics";
import {
  TAnalyticsResponse,
  TConversionRateResponse,
} from "services/identity/analytics/types";
import { combineReducers } from "redux";

const initialLeadsState: TAnalyticsResponse = null;
const initialLogcallsState: TAnalyticsResponse = null;
const initialCustomersState: TAnalyticsResponse = null;
const initialTotalDurationState: TAnalyticsResponse = null;
const initialConversionRateState: TConversionRateResponse = null;

const analyticsLeadsReducer = createReducer(
  initialLeadsState,
  (handleAction) => [
    handleAction(fetchAnalyticsLeadsAction.success, (state, { payload }) => ({
      ...state,
      ...payload.analytics,
    })),
  ]
);

const analyticsLogcallsReducer = createReducer(
  initialLogcallsState,
  (handleAction) => [
    handleAction(
      fetchAnalyticsLogcallsAction.success,
      (state, { payload }) => ({ ...state, ...payload.analytics })
    ),
  ]
);

const analyticsCustomersReducer = createReducer(
  initialCustomersState,
  (handleAction) => [
    handleAction(
      fetchAnalyticsCustomersAction.success,
      (state, { payload }) => ({ ...state, ...payload.analytics })
    ),
  ]
);

const analyticsTotalDurationReducer = createReducer(
  initialTotalDurationState,
  (handleAction) => [
    handleAction(
      fetchAnalyticsTotalDurationAction.success,
      (state, { payload }) => ({ ...state, ...payload.analytics })
    ),
  ]
);

const analyticsConversionRateReducer = createReducer(
  initialConversionRateState,
  (handleAction) => [
    handleAction(
      fetchAnalyticsConversionRateAction.success,
      (state, { payload }) => ({ ...state, ...payload.analytics })
    ),
  ]
);

export default combineReducers({
  leads: analyticsLeadsReducer,
  logcalls: analyticsLogcallsReducer,
  customers: analyticsCustomersReducer,
  totalDuration: analyticsTotalDurationReducer,
  conversionRate: analyticsConversionRateReducer,
});
