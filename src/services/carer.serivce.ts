import { User } from '../types/models';
import { ListResult, RequestError } from '../types/services';
import api from './api';

class CarerService {
  fetchCarers = async (): Promise<ListResult<User> | RequestError> => {
    try {
      const result = await api.get<ListResult<User>>('/carers/');

      const data = [...result.data] as ListResult<User>;
      data._type = 'ListResult';

      return data;
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };

  fetchPatient = async (carer: User): Promise<User | RequestError> => {
    try {
      const result = await api.get<User>('/carers/' + carer.id + '/patients');

      return { ...result.data, _type: 'User' };
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };
}

export default new CarerService();
