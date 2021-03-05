import { Store } from 'pullstate';
import { DEFAULT_USER } from '../types/default';
import { User } from '../types/models';

export interface IStore {
  token: string | null;
  user: User;
}

export const store = new Store<IStore>({
  user: DEFAULT_USER,
  token: null,
});

export default store;
