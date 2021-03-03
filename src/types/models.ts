export enum RoleTypes {
  CARER,
  NEUROLOGIST,
  PATIENT,
}

export interface User {
  email: String;
  password: string;
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
