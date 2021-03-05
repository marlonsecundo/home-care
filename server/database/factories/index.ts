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
    userId: faker.random.number(),
  };
})
  .state('OXYGENATION', (log, { faker }) => {
    const data = faker.random.number({ min: 80, max: 100 });
    let status = '';

    if (data > 90) status = 'MODERATE';
    else if (data > 85) status = 'LOW';
    else status = 'SEVERE';

    log.status = status;
    log.data = data;
  })
  .state('HEARTBEAT', (log, { faker }) => {
    const data = faker.random.number({ min: 45, max: 100 });
    let status = '';

    if (data > 70) status = 'MODERATE';
    else if (data > 50) status = 'LOW';
    else status = 'SEVERE';

    log.status = status;
    log.data = data;
  })
  .build();
