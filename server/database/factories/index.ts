import Factory from '@ioc:Adonis/Lucid/Factory';
import CarerPatient from 'App/Models/CarerPatient';
import NeurologistPatient from 'App/Models/NeurologistPatient';
import PatientLog from 'App/Models/PatientLog';
import Profile from 'App/Models/Profile';
import Role from 'App/Models/Role';
import User from 'App/Models/User';
import { DateTime } from 'luxon';

export const PatientLogFactory = Factory.define(PatientLog, ({ faker }) => {
  const type = faker.random.arrayElement(['OXYGENATION', 'HEARTBEAT']);

  let data = 0;
  let status = 'MODERATE';

  return {
    type,
    data,
    status,
    condition: faker.random.number({ min: 0, max: 2 }),
    userId: faker.random.number(),
  };
})
  .state('OXYGENATION', (log, { faker }) => {
    let data = faker.random.number({ min: 60, max: 100 });
    if (log.condition === 0) {
      data = faker.random.number({ min: 91, max: 98 });
    } else if (log.condition === 1) {
      data = faker.random.number({ min: 86, max: 90 });
    } else if (log.condition === 2) {
      data = faker.random.number({ min: 60, max: 85 });
    }

    let status = '';

    if (data > 90) status = 'MODERATE';
    else if (data > 85) status = 'LOW';
    else status = 'SEVERE';

    log.status = status;
    log.data = data;
  })
  .state('HEARTBEAT', (log, { faker }) => {
    let data = faker.random.number({ min: 40, max: 80 });
    if (log.condition === 0) {
      data = faker.random.number({ min: 71, max: 80 });
    } else if (log.condition === 1) {
      data = faker.random.number({ min: 51, max: 70 });
    } else if (log.condition === 2) {
      data = faker.random.number({ min: 40, max: 50 });
    }
    let status = '';

    if (data > 70) status = 'MODERATE';
    else if (data > 50) status = 'LOW';
    else status = 'SEVERE';

    log.status = status;
    log.data = data;
  })
  .build();

export const RoleFactory = Factory.define(Role, ({ faker }) => {
  return {
    type: faker.random.arrayElement(['CARER', 'NEUROLOGIST', 'PATIENT']),
    userId: faker.random.number(),
  };
}).build();

export const ProfileFactory = Factory.define(Profile, ({ faker }) => {
  faker.setLocale('pt_BR');
  return {
    birth: faker.date.past(faker.random.number({ min: 20, max: 70 })).toLocaleDateString(['pt-br']),
    cpf: faker.helpers
      .shuffle(faker.random.number({ min: 10000000000, max: 99999999999 }).toString().split(''))
      .join(''),
    crm: faker.helpers
      .shuffle(faker.random.number({ min: 10000, max: 99999 }).toString().split(''))
      .join(''),
    name: faker.name.findName(),
    intervention: false,
    condition: faker.random.number({ min: 0, max: 4 }),
    userId: faker.random.number(),
  };
}).build();

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    email: 'carlos@outlook.com',
    password: 'teste123',
  };
})
  .relation('profile', () => ProfileFactory)
  .relation('role', () => RoleFactory)
  .build();

export const NeurologistPatientFactory = Factory.define(NeurologistPatient, ({ faker }) => {
  return {
    neurologistId: faker.random.number(),
    patientId: faker.random.number(),
  };
}).build();

export const CarerPatientFactory = Factory.define(CarerPatient, ({ faker }) => {
  return {
    carerId: faker.random.number(),
    patientId: faker.random.number(),
  };
}).build();
