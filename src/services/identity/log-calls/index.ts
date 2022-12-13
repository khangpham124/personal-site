import HttpClient from '../../../utils/axios/instance';
import {
  TFetchLogCallsResponse,
  TCreateLogCallBody,
} from "./types";

import { crmPlatform } from "src/services/identity";

class LogCalls extends HttpClient {
  fetchLogCalls = async (
    type: "lead" | "customer",
    id: string,
    pageIndex: number,
    pageSize: number
  ): Promise<TFetchLogCallsResponse> => {
    const response = await this.instance.get(
      `${crmPlatform}/log-calls/${type}/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    return response.data;
  };

  createLogCall = async (
    type: "lead" | "customer",
    id: string,
    body: TCreateLogCallBody
  ): Promise<unknown> => {
    const response = await this.instance.post(
      `${crmPlatform}/log-calls/${type}/${id}`,
      body
    );
    return response.data;
  };
}

const LogCallsInstance = new LogCalls();
export default LogCallsInstance;
