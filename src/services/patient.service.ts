import { AxiosError } from 'axios';
import { User } from '../types/models';
import { ListResult, RequestError } from '../types/services';
import api from './api';

class PatientService {
  fetchPatients = async (): Promise<ListResult<User> | RequestError> => {
    try {
      const result = await api.get<ListResult<User>>('/patients/');

      const data = [...result.data] as ListResult<User>;
      data._type = 'ListResult';

      return data;
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };
}

export default new PatientService();
