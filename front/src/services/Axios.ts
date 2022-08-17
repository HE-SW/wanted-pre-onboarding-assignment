import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { GetTokenStorage } from '../utils/Localstorage';

const BASE_URL = 'http://localhost:8000';

const axiosCon: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const TodoApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${GetTokenStorage()}`,
  },
});

export const UserApi = axios.create(axiosCon);
