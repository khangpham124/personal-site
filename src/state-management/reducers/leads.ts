import { createReducer } from 'deox';

import { fetchLeadAction, fetchLeadsAction } from '../actions/leads';
import { TFetchLeadResponse, TFetchLeadsResponse } from 'services/identity/leads/types';

type TLeadsState = {
  data?: TFetchLeadsResponse;
  leadById?: TFetchLeadResponse;
};

const initialState: TLeadsState = {
  data: undefined,
  leadById: undefined,
};

const leadsReducer = createReducer(initialState, (handleAction) => [
  handleAction(fetchLeadsAction.success, (state, { payload }) => ({
    ...state,
    data: payload.leads,
  })),
  handleAction(fetchLeadAction.success, (state, { payload }) => ({
    ...state,
    leadById: payload.lead,
  })),
]);

export default leadsReducer;
