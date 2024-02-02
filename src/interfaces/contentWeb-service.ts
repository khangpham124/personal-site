import { AxiosResponse } from 'axios';
// import { OrderType } from '@/constants/common';

export interface ISlider {
  uuid: string;
  descriptionEn:string;
  descriptionVi:string;
  imageUrl:string;
  isShowWeb:boolean;
  linkedUrl: string;
  titleEn: string;
  titleVi: string;
  dataSlide: any[];
}

export interface QueryObject {
  page?: number;
  perPage?: number;
  isShowWeb: boolean;
  dataSlide: any[];
}



export interface ContentWebServices {
  getSlider: (queryObj?: QueryObject) => Promise<AxiosResponse<ISlider>>;
}
