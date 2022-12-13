import HttpClient from '../../../utils/axios/instance';
import {
  TFetchProjectsResponse,
  TFetchProjectDetailResponse,
  TCreateProjectBody,
  TUpdateProjectBody,
  TCreateProjectDesignBody,
  TFetchProjectDesignDetailResponse,
  TFetchProjectDesignByDomainResponse,
} from "./types";
import { crmPlatform } from "src/services/identity";
import Cookies from "js-cookie";

class Projects extends HttpClient {
  fetchProjects = async (
    pageIndex: number,
    pageSize: number,
    companyId?: string
  ): Promise<TFetchProjectsResponse> => {
    const companyID = Cookies.get("companyID");
    const response = await this.instance.get(
      `${crmPlatform}/crm-projects?pageIndex=${pageIndex}&pageSize=${pageSize}&companyId=${companyID}`
    );
    return response.data;
  };

  fetchProjectDetail = async (
    id: string
  ): Promise<TFetchProjectDetailResponse> => {
    const response = await this.instance.get(`${crmPlatform}/crm-projects/${id}`);
    return response.data;
  };

  createProject = async (body: TCreateProjectBody): Promise<unknown> => {
    const response = await this.instance.post(`${crmPlatform}/crm-projects`, body);
    return response.data;
  };

  updateProject = async (
    id: string,
    body: TUpdateProjectBody
  ): Promise<unknown> => {
    const response = await this.instance.patch(`${crmPlatform}/crm-projects/${id}`, body);
    return response.data;
  };

  deleteProject = async (id: string): Promise<unknown> => {
    const response = await this.instance.delete(`${crmPlatform}/crm-projects/${id}`);
    return response.data;
  };

  validateDomain = async (domainName: string): Promise<unknown> => {
    const response = await this.instance.get(
      `${crmPlatform}/crm-projects/is-project-domain-available/${domainName}`
    );
    return response.data;
  };

  createProjectDesign = async (
    id: string,
    body: TCreateProjectDesignBody
  ): Promise<unknown> => {
    const response = await this.instance.post(
      `${crmPlatform}/crm-projects/${id}/design`,
      body
    );
    return response.data;
  };

  fetchProjectDesignDetail = async (
    id: string
  ): Promise<TFetchProjectDesignDetailResponse> => {
    const response = await this.instance.get(`${crmPlatform}/crm-projects/${id}/design`);
    return response.data;
  };

  fetchProjectDesignByDomain = async (
    domainName: string
  ): Promise<TFetchProjectDesignByDomainResponse> => {
    const response = await this.instance.get(
      `${crmPlatform}/crm-projects/design/${domainName}`
    );
    return response.data;
  };
}

const ProjectsInstance = new Projects();
export default ProjectsInstance;
