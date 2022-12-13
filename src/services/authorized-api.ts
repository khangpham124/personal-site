import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";
import HttpClient from "../utils/axios/instance";
import { IResponse, IConfig } from "../utils/axios/entities";
import authHelpers from "./helpers";
import AuthInstance from "./identity/auth";
import { crmPlatform, authenticateURL, USERS_API_URL, CONFIRM_INVITE_USER } from "./identity/index";

import { catchAxiosError } from "../utils/axios/error";

export const codeStatus = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
};

export class authenticateAPI extends HttpClient {
  public checkAuthenticate = async (payload: any): Promise<IResponse> => {
    const response: IResponse = await axios.post(`${authenticateURL}`, payload).catch(catchAxiosError);
    return response;
  };

  public checkExistedEmail = async (email: string): Promise<IResponse> => {
    const response: IResponse = await axios.get(`${crmPlatform}/${USERS_API_URL}/is-email-existed/${email}`).catch(catchAxiosError);
    return response;
  };

  public confirmInviteNewUser = async (requestBody: any, token: string): Promise<IResponse> => {
    const response: IResponse = await this.instance.post(`${crmPlatform}/${CONFIRM_INVITE_USER}?token=${token}`, requestBody).catch(catchAxiosError);
    return response;
  };
}



const AuthorizedInstance = (baseURL: string): AxiosInstance => {
  const authBearer = authHelpers.getCrmAccessToken();
  const instance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${authBearer}`,
    },
  });

  const refreshTokens = async () => {
    const refreshToken = await authHelpers.getRefreshToken();

    if (!refreshToken) {
      // navigate to login page
    }

    const { access_token, refresh_token } = await AuthInstance.refreshToken(
      refreshToken ?? ""
    );

    authHelpers.storeAccessToken(access_token);
    authHelpers.storeRefreshToken(refresh_token);

    return authHelpers.getAccessToken();
  };

  const onRequest = (request: AxiosRequestConfig) => {
    const authBearer = authHelpers.getAccessToken();
    if (authBearer) {
      request.headers.Authorization = `Bearer ${authBearer}`;
    }

    return request;
  };

  const onResponseSuccess = (response: AxiosResponse) => response;

  const onResponseError = async (axiosError: AxiosError) => {
    const { response } = axiosError;
    const responseStatus = response?.status;
    const originalRequest = axiosError.config;

    if (responseStatus === codeStatus.UNAUTHORIZED && originalRequest) {
      return refreshTokens()
        .then((newAccessToken) => {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios.request(originalRequest);
        })
        .catch(() => {
          // navigate to login page
        });
    }

    return Promise.reject(axiosError);
  };

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

export default AuthorizedInstance;
