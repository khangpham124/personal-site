// import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from 'cookies-next';

export const baseURL = process.env.NEXT_PUBLIC_IMAGE_PREFIX as string;
export const axiosPrivate = axios.create(
  {
  baseURL,
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${getCookie('token')}`
  },
  paramsSerializer: (params) => queryString.stringify(params),
  withCredentials: true,
});


const http = axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export default http;
