import { AxiosError } from 'axios';
import { User } from '../types/models';
import api from './api';

const fetchPatients = async (neurologist: User): Promise<User[] | null> => {
  try {
    const result = await api.get<User[]>(
      '/neurologists/' + neurologist.id + '/patients'
    );

    return result.data;
  } catch (e) {
    const error = e as AxiosError;

    return e;
  }
};

const fetchNeurologists = async (): Promise<User[] | null> => {
  try {
    const result = await api.get<User[]>('/neurologists/');

    return result.data;
  } catch (e) {
    const error = e as AxiosError;

    return e;
  }
};

export const NeurologistService = { fetchPatients, fetchNeurologists };
