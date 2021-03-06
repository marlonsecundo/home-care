import Factory from '@ioc:Adonis/Lucid/Factory';
import PatientLog from 'App/Models/PatientLog';

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
