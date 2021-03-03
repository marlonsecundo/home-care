import { AxiosError, AxiosResponse } from 'axios';
import { Profile, Role, RoleTypes, User } from '../types/models';
import { RequestFailure, RequestResponse } from '../types/service';
import api from './api';

const signup = async (
  user: User,
  profile: Profile,
  role: Role
): Promise<RequestResponse> => {
  try {
    const result = await api.post('/signup', {
      user,
      profile,
      role: { ...role, type: RoleTypes[role.type] },
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
): Promise<RequestResponse> => {
  try {
    const result = await api.post('/login', {
      email: email.toLowerCase().replace(' ', ''),
      password,
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

export const AuthService = { login, signup };
