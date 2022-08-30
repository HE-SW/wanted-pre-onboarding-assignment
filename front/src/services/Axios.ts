import axios, { AxiosInstance } from 'axios';
import { GetTokenStorage } from '../utils/Localstorage';

const BASE_URL = 'http://localhost:8000';

export const TodoApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${GetTokenStorage()}`,
  },
});

export const UserApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
