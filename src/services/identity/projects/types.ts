type TProjectInfo = {
  name?: string;
  address?: string;
  companyId?: string;
  email?: string;
  hotline?: string;
  workingHours?: string;
  domainName?: string;
  projectDescription?: string;
  projectOwnerIntroduction?: string;
  designType?: string;
  thumbnail?: any;
  design?: any;
  status?: string;
  city?: {
    id:string;
    name: string;
  };
  ward?: {
    id:string;
    name: string;
  };
  district?: {
    id:string;
    name: string;
  };
  quarterCompletion: number,
  yearCompletion:number
};

export type TProject = TProjectInfo & {
  id: string;
};

type TProjectDesign = {
  id: string;
  project: string;
  design: string;
};

export type TFetchProjectsResponse = {
  items: TProject[];
  pageSize: number;
  pageIndex: number;
  totalItems: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export type TFetchProjectsDesignResponse = {
  id: string;
};

export type TPostProjectsRequest = {
  name: string;
  address: string;
  companyId: string;
  email: string;
  hotline: string;
  workingHours: string;
  status: string;
  designType: string;
  domainName: string;
  projectDescription: string;
  projectOwnerIntroduction: string;
  thumbnail: string;
  design: string;
};

export type TFetchProjectDetailResponse = TProject;

export type TCreateProjectBody = TProjectInfo;

export type TCreateProjectResponse = TProject;

export type TUpdateProjectBody = TProjectInfo;

export type TCreateProjectDesignBody = { design: string };

export type TFetchProjectDesignDetailResponse = TProjectDesign;

export type TFetchProjectDesignByDomainResponse = TProjectDesign;
