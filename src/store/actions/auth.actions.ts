import { IStore } from '..';

const authenticate = (token: string) => (s: IStore) => {
  s.token = token;
};

const logoff = () => (s: IStore) => {
  s.token = undefined;
};

export const AuthActions = { authenticate, logoff };
