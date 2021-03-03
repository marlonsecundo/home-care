import { Store } from 'pullstate';

export interface IStore {
  token?: string;
}

export const store = new Store<IStore>({});

export default store;
