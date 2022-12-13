import HttpClient from "../../../utils/axios/instance";
import { catchAxiosError } from "../../../utils/axios/error";
import { IResponse, IConfig } from "../../../utils/axios/entities";
import {
  baseUrl,
  LEAD_API_URL,
  PLATFORM_ACCESSES,
  INVITE_USER,
  CONFIRM_INVITE_USER,
} from "../index";
import { crmPlatform } from "src/services/identity";
import Cookies from "js-cookie";


export class ProjectAPI extends HttpClient {

  public fetchProjects = async (
    pageIndex: number,
    pageSize: number,
    companyId?: string
  ): Promise<IResponse> => {
    const companyID = Cookies.get("companyID");
    const response = await this.instance.get(
      `${crmPlatform}/crm-projects?pageIndex=${pageIndex}&pageSize=${pageSize}&companyId=${companyID}`
    );
    return response.data;
  };


  public generateLink = async (IDProject: any): Promise<IResponse> => {
    const response: IResponse = await this.instance
      .get(`${crmPlatform}/crm-projects/${IDProject}/generate-link`)
      .catch(catchAxiosError);
    return response.data;
  };
}
