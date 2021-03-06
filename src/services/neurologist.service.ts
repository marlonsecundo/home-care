import { AxiosError } from 'axios';
import { User } from '../types/models';
import api from './api';

class NeurologistService {
  fetchPatients = async (neurologist: User): Promise<User[] | null> => {
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

  fetchNeurologists = async (): Promise<User[] | null> => {
    try {
      const result = await api.get<User[]>('/neurologists/');

      return result.data;
    } catch (e) {
      const error = e as AxiosError;

      return e;
    }
  };

  updateIntervention = async (
    neurologist: User,
    patient: User,
    intervention: boolean
  ): Promise<User | null> => {
    try {
      const result = await api.put(
        '/neurologists/' + neurologist.id + '/patients/' + patient.id,
        { intervention }
      );

      return result.data;
    } catch (e) {
      const error = e as AxiosError;

      return e;
    }
  };
}

export default new NeurologistService();
