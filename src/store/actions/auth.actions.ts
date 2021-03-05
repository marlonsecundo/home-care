import { IStore } from '..';
import { User } from '../../types/models';

const authenticate = (token: string, user: User) => (s: IStore) => {
  s.token = token;
  s.user = user;
};

const logoff = () => (s: IStore) => {
  s.token = undefined;
};

export const AuthActions = { authenticate, logoff };
