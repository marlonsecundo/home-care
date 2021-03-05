import User from 'App/Models/User';

/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Queue from 'bull';
import { PatientLogFactory } from 'Database/factories';

const patientLog = new Queue('PatientLogGenerator');

patientLog.process(async (job) => {
  const patients = await User.query()
    .preload('profile')
    .preload('role')
    .whereHas('role', (query) => {
      query.where('type', 'PATIENT');
    });

  const promisses = patients.map(async (patient) => {
    try {
      await PatientLogFactory.apply('OXYGENATION')
        .merge({ userId: patient.id, type: 'OXYGENATION' })
        .create();
      await PatientLogFactory.apply('HEARTBEAT')
        .merge({ userId: patient.id, type: 'HEARTBEAT' })
        .create();
    } catch (e) {
      console.log(e);
    }
  });

  await Promise.all(promisses);
});

var endDate = new Date(3000, 1, 1);

export const startPatientLogProcess = () => {
  patientLog.add({}, { repeat: { every: 1000, endDate: endDate.toString() } });
};

startPatientLogProcess();
