import HttpClient from '../../../utils/axios/instance';
import {
  TFetchCommentsByIdParams,
  TFetchCommentsByIdResponse,
  TAllCustomerComment,
} from "./types";
import { crmPlatform } from "src/services/identity";

class Comments extends HttpClient {
  fetchCommentsById = async (
    id: string,
    params: TFetchCommentsByIdParams
  ): Promise<TFetchCommentsByIdResponse> => {
    const response = await this.instance.get(`${crmPlatform}/comments/leads/${id}`, {
      params,
    });
    return response.data;
  };

  createComment = async (
    leadId: string,
    body: { content: string }
  ): Promise<TFetchCommentsByIdResponse> => {
    const response = await this.instance.post(
      `${crmPlatform}/comments/leads/${leadId}`,
      body
    );
    return response.data;
  };

  fetchCommentsByCustomerId = async (
    customerId: string,
    pageIndex: number,
    pageSize: number
  ): Promise<TAllCustomerComment> => {
    const response = await this.instance.get(
      `${crmPlatform}/comments/customers/${customerId}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    return response.data;
  };

  createCommentByCustomer = async (
    customerId: string,
    content: string
  ): Promise<TFetchCommentsByIdResponse> => {
    const response = await this.instance.post(
      `${crmPlatform}/comments/customers/${customerId}`,
      {
        content,
      }
    );
    return response.data;
  };
}

const CommentsInstance = new Comments();
export default CommentsInstance;
