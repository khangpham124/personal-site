import { createActionCreator } from "deox";

import { ELeadsActions } from "./constants";
import {
  TCreateLeadBody,
  TCreateLeadResponse,
  TFetchLeadResponse,
  TFetchLeadsResponse,
  TUpdateLeadBody,
  TUpdateLeadResponse,
  TPostLeadAttachmentByIDResponse
} from "services/identity/leads/types";
import { TCustomer } from "services/identity/customers/types";

export const fetchLeadsAction = {
  request: createActionCreator(
    ELeadsActions.FETCH_LEADS_REQUEST,
    (resolve) => (pageIndex: number, pageSize: number, companyId?: string, optionalParams?: any, cb?: () => void) =>
      resolve({ pageIndex, pageSize, companyId, optionalParams, cb })
  ),
  success: createActionCreator(
    ELeadsActions.FETCH_LEADS_SUCCESS,
    (resolve) => (leads: TFetchLeadsResponse) => resolve({ leads })
  ),
  failure: createActionCreator(
    ELeadsActions.FETCH_LEADS_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const fetchLeadAction = {
  request: createActionCreator(
    ELeadsActions.FETCH_LEAD_REQUEST,
    (resolve) => (id: string, cb?: () => void) => resolve({ id, cb })
  ),
  success: createActionCreator(
    ELeadsActions.FETCH_LEAD_SUCCESS,
    (resolve) => (lead: TFetchLeadResponse) => resolve({ lead })
  ),
  failure: createActionCreator(
    ELeadsActions.FETCH_LEAD_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const createLeadAction = {
  request: createActionCreator(
    ELeadsActions.CREATE_LEAD_REQUEST,
    (resolve) => (body: TCreateLeadBody, cb?: () => void) =>
      resolve({ body, cb })
  ),
  success: createActionCreator(
    ELeadsActions.CREATE_LEAD_SUCCESS,
    (resolve) => (lead: TCreateLeadResponse) => resolve({ lead })
  ),
  failure: createActionCreator(
    ELeadsActions.CREATE_LEAD_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const updateLeadAction = {
  request: createActionCreator(
    ELeadsActions.UPDATE_LEAD_REQUEST,
    (resolve) =>
      (
        id: string,
        body: TUpdateLeadBody,
        successCb?: () => void,
        failedCb?: () => void
      ) =>
        resolve({ id, body, successCb, failedCb })
  ),
  success: createActionCreator(
    ELeadsActions.UPDATE_LEAD_SUCCESS,
    (resolve) => (lead: TUpdateLeadResponse) => resolve({ lead })
  ),
  failure: createActionCreator(
    ELeadsActions.UPDATE_LEAD_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const convertLeadToCustomerAction = {
  request: createActionCreator(
    ELeadsActions.CONVERT_LEAD_TO_CUSTOMER_REQUEST,
    (resolve) => (id: string, cb?: (customer: TCustomer) => void) => resolve({ id, cb })
  ),
  success: createActionCreator(
    ELeadsActions.CONVERT_LEAD_TO_CUSTOMER_SUCCESS,
    (resolve) => () => resolve()
  ),
  failure: createActionCreator(
    ELeadsActions.CONVERT_LEAD_TO_CUSTOMER_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};

export const postLeadAttachmentByIDAction = {
  request: createActionCreator(
    ELeadsActions.POST_LEAD_ATTACHMENTS_BY_ID_REQUEST,
    (resolve) => (id: string, body: any, cb?: () => void) => resolve({ id, body, cb })
  ),
  success: createActionCreator(
    ELeadsActions.POST_LEAD_ATTACHMENTS_BY_ID_SUCCESS,
    (resolve) => (attachment: TPostLeadAttachmentByIDResponse) => resolve({ attachment })
  ),
  failure: createActionCreator(
    ELeadsActions.POST_LEAD_ATTACHMENTS_BY_ID_FAILED,
    (resolve) => (error) => resolve({ error })
  ),
};