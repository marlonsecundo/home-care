import { AxiosError } from 'axios';
import { Profile, Role, RoleTypes, User } from '../types/models';
import { RequestResponse } from '../types/service';
import api from './api';

const signup = async (
  user: User,
  profile: Profile,
  role: Role,
  neurologist: User,
  carer: User
): Promise<RequestResponse> => {
  try {
    const result = await api.post('/signup', {
      user: { ...user, email: user.email.toLowerCase().replace(' ', '') },
      profile,
      role: { ...role, type: RoleTypes[role.type] },
      neurologist,
      carer,
    });

    return { ...result, type: 'AXIOS_RESPONSE' };
  } catch (e) {
    const error = e as AxiosError;
    return {
      code: error.code,
      message: error.message,
      type: 'REQUEST_FAILURE',
    };
  }
};

const login = async (
  email: string,
  password: string
): Promise<{ user: User; token: string } | null> => {
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
      },
    };

    return formattedResult;
  } catch (e) {
    const error = e as AxiosError;

    return null;
  }
};

export const AuthService = { login, signup };
