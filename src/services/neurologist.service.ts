import { AxiosError } from 'axios';
import { User } from '../types/models';
import { ListResult, RequestError } from '../types/services';
import api from './api';

class NeurologistService {
  fetchPatients = async (
    neurologist: User
  ): Promise<ListResult<User> | RequestError> => {
    try {
      const result = await api.get<ListResult<User>>(
        '/neurologists/' + neurologist.id + '/patients'
      );

      const data = [...result.data] as ListResult<User>;
      data._type = 'ListResult';

      return data;
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };

  fetchNeurologists = async (): Promise<ListResult<User> | RequestError> => {
    try {
      const result = await api.get<ListResult<User>>('/neurologists/');

      const data = [...result.data] as ListResult<User>;
      data._type = 'ListResult';

      return data;
    } catch (e) {
      return { ...e, _type: 'RequestError' };
    }
  };

  updateIntervention = async (
    patient: User,
    intervention: boolean
  ): Promise<User | RequestError> => {
    try {
      const result = await api.put(
        '/neurologists/' + 1 + '/patients/' + patient.id,
        { intervention }
      );

      return { ...result.data, _type: 'User' };
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };
}

export default new NeurologistService();
