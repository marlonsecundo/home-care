import { AxiosResponse } from 'axios';

export interface RequestFailure {
  type: 'REQUEST_FAILURE';
  message: string;
  code?: string;
}

export interface RequestSuccess extends AxiosResponse {
  type: 'AXIOS_RESPONSE';
}

export type RequestResponse = RequestSuccess | RequestFailure;
