export enum RoleTypes {
  CARER,
  NEUROLOGIST,
  PATIENT,
}

export enum Status {
  LOW = 'Baixo',
  MODERATE = 'Moderado',
  SEVERE = 'Servero',
  NONE = 'Vazio',
}

export enum PatientLogType {
  OXYGENATION,
  HEARTBEAT,
  NONE,
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
  intervention: boolean;
  condition: number;
}

export interface Role {
  type: RoleTypes;
}

export interface PatientLog {
  data: number;
  type: PatientLogType;
  status: Status;
  userId: number;
}
