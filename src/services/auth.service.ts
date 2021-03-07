import { AxiosError } from 'axios';
import { Profile, Role, RoleTypes, User } from '../types/models';
import { LoginResponse, RequestError } from '../types/services';
import api from './api';

class AuthService {
  signup = async (
    user: User,
    profile: Profile,
    role: Role,
    neurologist: User,
    carer: User
  ): Promise<User | RequestError> => {
    try {
      const result = await api.post('/signup', {
        user: { ...user, email: user.email.toLowerCase().replace(' ', '') },
        profile: {
          ...profile,
          cpf: profile.cpf.split('.').join('').split('-').join(''),
        },
        role: { ...role, type: RoleTypes[role.type] },
        neurologist,
        carer,
      });

      return { ...result.data, _type: 'User' };
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };

  login = async (
    email: string,
    password: string
  ): Promise<LoginResponse | RequestError> => {
    try {
      const result = await api.post('/login', {
        email: email.toLowerCase().replace(' ', ''),
        password,
      });

      const formattedResult = {
        token: result.data.token,
        user: {
          ...result.data.user,
          role: {
            type: (<any>RoleTypes)[result.data.user.role.type],
          },
          _type: 'User',
        },
      };

      return { ...formattedResult, _type: 'LoginResponse' };
    } catch (e) {
      const error = e as RequestError;
      error._type = 'RequestError';
      return error;
    }
  };
}

export default new AuthService();
