import HttpClient from '../../../utils/axios/instance';
import {
  TFetchCitiesResponse,
  TFetchDistrictsResponse,
  TFetchWardsResponse,
} from "./types";
import { baseUrl } from "src/services/identity";

class Location extends HttpClient {
  fetchCities = async (): Promise<TFetchCitiesResponse> => {
    const response = await this.instance.get(`${baseUrl}/listing/location-info`);
    return response.data;
  };

  fetchDistricts = async (cityId: number): Promise<TFetchDistrictsResponse> => {
    const response = await this.instance.get(
      `${baseUrl}/listing/location-info?cityId=${cityId}`
    );
    return response.data;
  };

  fetchWards = async (districtId: number): Promise<TFetchWardsResponse> => {
    const response = await this.instance.get(
      `${baseUrl}/listing/location-info?districtId=${districtId}`
    );
    return response.data;
  };
}

const LocationInstance = new Location();
export default LocationInstance;
