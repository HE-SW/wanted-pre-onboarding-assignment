import axios, { AxiosInstance } from 'axios';
import { GetTokenStorage } from '../utils/Localstorage';

const BASE_URL = process.env.REACT_APP_API_URL;

export const TodoApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${GetTokenStorage()}`,
  },
});

export const UserApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
