export type City = {
  id: number;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
};

export type TFetchCitiesResponse = {
  cities: City[];
};

export type District = {
  id: number;
  name: string;
  prefix: any;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  cityId: number;
};

export type TFetchDistrictsResponse = {
  districts: District[];
};

export type Ward = {
  id: number;
  name: string;
  prefix: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  districtId: number;
  cityId: number;
};

export type TFetchWardsResponse = {
  wards: Ward[];
};
