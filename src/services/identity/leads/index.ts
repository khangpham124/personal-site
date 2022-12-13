import HttpClient from '../../../utils/axios/instance';
import {
  TCreateLeadBody,
  TCreateLeadResponse,
  TFetchLeadsResponse,
  TFetchLeadResponse,
  TUpdateLeadBody,
  TUpdateLeadResponse,
  TConvertToCustomerResponse,
  TPostLeadAttachmentByIDResponse,
} from "./types";
import { crmPlatform } from "src/services/identity";
import { objectToQueryString } from 'utils/helper/objectToQueryString';
import Cookies from "js-cookie";

class Leads extends HttpClient {
  fetchLeads = async (
    pageIndex: number,
    pageSize: number,
    companyId: string,
    optionalParams?: any
  ): Promise<TFetchLeadsResponse> => {
    const params = { pageIndex, pageSize, companyId, ...optionalParams };
    const response = await this.instance.get(`${crmPlatform}/leads?${objectToQueryString(params)}`);
    return response.data;
  };

  fetchLead = async (id: string): Promise<TFetchLeadResponse> => {
    const response = await this.instance.get(`${crmPlatform}/leads/${id} `);
    return response.data;
  };

  createLead = async (body: TCreateLeadBody): Promise<TCreateLeadResponse> => {
    const response = await this.instance.post(`${crmPlatform}/leads`, body);
    return response.data;
  };

  updateLead = async (
    id: string,
    body: TUpdateLeadBody
  ): Promise<TUpdateLeadResponse> => {
    const response = await this.instance.patch(`${crmPlatform}/leads/${id}`, body);
    return response.data;
  };

  deleteLead = async (id: string): Promise<TUpdateLeadResponse> => {
    const response = await this.instance.delete(`${crmPlatform}/leads/${id}`);
    return response.data;
  };

  convertToCustomer = async (
    id: string
  ): Promise<TConvertToCustomerResponse> => {
    const companyID = Cookies.get("companyID");
    const response = await this.instance.post(
      `${crmPlatform}/leads/${id}/convert-to-customer`
    );
    return response.data;
  };

  postLeadAttachmentByID = async (
    id: string,
    body: any
  ): Promise<TPostLeadAttachmentByIDResponse> => {
    const response = await this.instance.get(`${crmPlatform}/leads/attachment/${id}`, body);
    return response.data;
  };

  getListAttachmentByID = async (
    id: string,
    body: any
  ): Promise<TPostLeadAttachmentByIDResponse> => {
    const response = await this.instance.get(`${crmPlatform}/leads/attachment/${id}`, body);
    return response.data;
  };
}

const LeadsInstance = new Leads();
export default LeadsInstance;
