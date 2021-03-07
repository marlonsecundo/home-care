import { AxiosError } from 'axios';
import { User } from './models';

export interface RequestError extends AxiosError {
  _type: 'RequestError';
}

export interface ListResult<T> extends Array<T> {
  _type: 'ListResult';
}

export interface LoginResponse {
  user: User;
  token: string;
  _type: 'LoginResponse';
}
