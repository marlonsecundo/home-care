import { AxiosError } from 'axios';
import { User } from '../types/models';
import api from './api';

const fetchCarers = async (): Promise<User[] | null> => {
  try {
    const result = await api.get<User[]>('/carers/');

    return result.data;
  } catch (e) {
    const error = e as AxiosError;

    return e;
  }
};

export const CarerService = { fetchCarers };
