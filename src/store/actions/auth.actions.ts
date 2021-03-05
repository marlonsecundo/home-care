import { IStore } from '..';
import { DEFAULT_USER } from '../../types/default';
import { User } from '../../types/models';

const authenticate = (token: string, user: User) => (s: IStore) => {
  s.user = user;

  s.token = token;
};

const logoff = () => (s: IStore) => {
  s.token = null;
  s.user = DEFAULT_USER;
};

export const AuthActions = { authenticate, logoff };
