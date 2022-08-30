import axios, { AxiosInstance } from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

const UserApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

type User = {
  email: string;
  password: string;
};

export type PromiseReturnTypeUser = {
  access_token: string;
};

export const UserSignUp = async ({
  email,
  password,
}: User): Promise<PromiseReturnTypeUser> => {
  const { data } = await UserApi.post('/auth/signup', { email, password });
  return data;
};

export const UserSignIn = async ({
  email,
  password,
}: User): Promise<PromiseReturnTypeUser> => {
  const { data } = await UserApi.post('/auth/signin', { email, password });
  return data;
};
