const LocalStorageKey = 'Token';

export const SetTokenStorage = (Token: string): void => {
  localStorage.setItem(LocalStorageKey, Token);
};

export const GetTokenStorage = (): string | boolean => {
  const token = localStorage.getItem(LocalStorageKey);
  if (token) {
    return token;
  }
  return false;
};
