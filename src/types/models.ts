export enum RoleTypes {
  CARER,
  NEUROLOGIST,
  PATIENT,
}

export interface User {
  id?: number;
  email: string;
  password: string;
  profile?: Profile;

  role?: Role;
}

export interface Profile {
  name: string;
  cpf: string;
  crm: string;
  birth: string;
}

export interface Role {
  type: RoleTypes;
}
