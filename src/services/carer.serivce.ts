import { AxiosError } from 'axios';
import { User } from '../types/models';
import api from './api';

class CarerService {
  fetchCarers = async (): Promise<User[] | null> => {
    try {
      const result = await api.get<User[]>('/carers/');

      return result.data;
    } catch (e) {
      const error = e as AxiosError;

      return e;
    }
  };

  fetchPatient = async (carer: User): Promise<User | null> => {
    try {
      const result = await api.get<User>('/carers/' + carer.id + '/patients');

      return result.data;
    } catch (e) {
      const error = e as AxiosError;

      return e;
    }
  };
}

export default new CarerService();
