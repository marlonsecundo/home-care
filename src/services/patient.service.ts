import { AxiosError } from 'axios';
import { User } from '../types/models';
import api from './api';

class PatientService {
  fetchPatients = async (): Promise<User[] | null> => {
    try {
      const result = await api.get<User[]>('/patients/');

      return result.data;
    } catch (e) {
      const error = e as AxiosError;

      return e;
    }
  };
}

export default new PatientService();
