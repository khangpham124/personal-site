import HttpClient from '../../../utils/axios/instance';
import { crmPlatform } from "src/services/identity";

import { TFetchAnalyticsResponse, inputAnalytics } from './types';
import Cookies from "js-cookie";

class Analytics extends HttpClient {
  fetchAnalytics = async (fromDate: string, toDate: string, dimension: inputAnalytics["dimension"], entity: inputAnalytics["entity"], question: inputAnalytics["question"]): Promise<TFetchAnalyticsResponse> => {
    const params = { fromDate, toDate, dimension, entity, question };
    const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
    const companyID = String(Cookies.get("companyID"));
    const response = await this.instance.get(`${crmPlatform}/analytics?companyId=${companyID}`, { params });
    return response.data;
  };
}

const AnalyticsInstance = new Analytics();
export default AnalyticsInstance;
