import { createActionCreator } from "deox";

import { EAnalyticsActions } from "./constants";
import {
  TAnalyticsResponse,
  inputAnalytics,
  TConversionRateResponse,
} from "services/identity/analytics/types";

export const fetchAnalyticsLeadsAction = {
  request: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_LEADS_REQUEST,
    (resolve) =>
      (
        fromDate: string,
        toDate: string,
        dimension: inputAnalytics["dimension"],
        entity = "leads",
        question: inputAnalytics["question"],
        cb?: () => void
      ) =>
        resolve({ fromDate, toDate, dimension, entity, question, cb })
  ),
  success: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_LEADS_SUCCESS,
    (resolve) => (analytics: TAnalyticsResponse) => resolve({ analytics })
  ),
  failure: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_LEADS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchAnalyticsLogcallsAction = {
  request: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_LOGCALLS_REQUEST,
    (resolve) =>
      (
        fromDate: string,
        toDate: string,
        dimension: inputAnalytics["dimension"],
        entity = "logcalls",
        question: inputAnalytics["question"],
        cb?: () => void
      ) =>
        resolve({ fromDate, toDate, dimension, entity, question, cb })
  ),
  success: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_LOGCALLS_SUCCESS,
    (resolve) => (analytics: TAnalyticsResponse) => resolve({ analytics })
  ),
  failure: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_LOGCALLS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchAnalyticsCustomersAction = {
  request: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_CUSTOMERS_REQUEST,
    (resolve) =>
      (
        fromDate: string,
        toDate: string,
        dimension: inputAnalytics["dimension"],
        entity = "customers",
        question: inputAnalytics["question"],
        cb?: () => void
      ) =>
        resolve({ fromDate, toDate, dimension, entity, question, cb })
  ),
  success: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_CUSTOMERS_SUCCESS,
    (resolve) => (analytics: TAnalyticsResponse) => resolve({ analytics })
  ),
  failure: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_CUSTOMERS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchAnalyticsTotalDurationAction = {
  request: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_TOTAL_DURATION_REQUEST,
    (resolve) =>
      (
        fromDate: string,
        toDate: string,
        dimension: inputAnalytics["dimension"],
        entity = "logcalls",
        question: inputAnalytics["question"],
        cb?: () => void
      ) =>
        resolve({ fromDate, toDate, dimension, entity, question, cb })
  ),
  success: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_TOTAL_DURATION_SUCCESS,
    (resolve) => (analytics: TAnalyticsResponse) => resolve({ analytics })
  ),
  failure: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_TOTAL_DURATION_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchAnalyticsConversionRateAction = {
  request: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_CONVERSION_RATE_REQUEST,
    (resolve) =>
      (
        fromDate: string,
        toDate: string,
        dimension: inputAnalytics["dimension"],
        entity = "leads",
        question: inputAnalytics["question"],
        cb?: () => void
      ) =>
        resolve({ fromDate, toDate, dimension, entity, question, cb })
  ),
  success: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_CONVERSION_RATE_SUCCESS,
    (resolve) => (analytics: TConversionRateResponse) => resolve({ analytics })
  ),
  failure: createActionCreator(
    EAnalyticsActions.FETCH_ANALYTICS_CONVERSION_RATE_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};
