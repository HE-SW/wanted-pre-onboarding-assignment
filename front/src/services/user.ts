import { UserApi } from './Axios';
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
