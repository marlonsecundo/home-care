import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import NeurologistPatient from 'App/Models/NeurologistPatient';
import { CarerPatientFactory, NeurologistPatientFactory, UserFactory } from 'Database/factories';

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // PATIENT

    const p1 = await UserFactory.with('profile', 1, (profile) => {
      profile.merge({ condition: 0 });
    })
      .with('role', 1, (role) => {
        role.merge({ type: 'PATIENT' });
      })
      .merge({
        email: 'p1@homecare',
        password: 'teste123',
      })
      .create();

    const p2 = await UserFactory.with('profile', 1, (profile) => {
      profile.merge({ condition: 1 });
    })
      .with('role', 1, (role) => {
        role.merge({ type: 'PATIENT' });
      })
      .merge({
        email: 'p2@homecare',
        password: 'teste123',
      })
      .create();

    const p3 = await UserFactory.with('profile', 1, (profile) => {
      profile.merge({ condition: 2 });
    })
      .with('role', 1, (role) => {
        role.merge({ type: 'PATIENT' });
      })
      .merge({
        email: 'p3@homecare',
        password: 'teste123',
      })
      .create();

    const p4 = await UserFactory.with('profile', 1, (profile) => {
      profile.merge({ condition: 3 });
    })
      .with('role', 1, (role) => {
        role.merge({ type: 'PATIENT' });
      })
      .merge({
        email: 'p4@homecare',
        password: 'teste123',
      })
      .create();

    // NEUROLOGIST

    const n1 = await UserFactory.with('profile', 1, (profile) => {})
      .with('role', 1, (role) => {
        role.merge({ type: 'NEUROLOGIST' });
      })
      .merge({
        email: 'n1@homecare',
        password: 'teste123',
      })
      .create();

    // CARER

    const c1 = await UserFactory.with('profile', 1, (profile) => {})
      .with('role', 1, (role) => {
        role.merge({ type: 'CARER' });
      })
      .merge({
        email: 'c1@homecare',
        password: 'teste123',
      })
      .create();

    const c2 = await UserFactory.with('profile', 1, (profile) => {})
      .with('role', 1, (role) => {
        role.merge({ type: 'CARER' });
      })
      .merge({
        email: 'c2@homecare',
        password: 'teste123',
      })
      .create();

    const c3 = await UserFactory.with('profile', 1, (profile) => {})
      .with('role', 1, (role) => {
        role.merge({ type: 'CARER' });
      })
      .merge({
        email: 'c3@homecare',
        password: 'teste123',
      })
      .create();

    const c4 = await UserFactory.with('profile', 1, (profile) => {})
      .with('role', 1, (role) => {
        role.merge({ type: 'CARER' });
      })
      .merge({
        email: 'c4@homecare',
        password: 'teste123',
      })
      .create();

    // CARER PATIENTS

    await CarerPatientFactory.merge({ carerId: c1.id, patientId: p1.id }).create();
    await CarerPatientFactory.merge({ carerId: c2.id, patientId: p2.id }).create();
    await CarerPatientFactory.merge({ carerId: c3.id, patientId: p3.id }).create();
    await CarerPatientFactory.merge({ carerId: c4.id, patientId: p4.id }).create();

    // NEUROLOGIST PATIENTS

    await NeurologistPatientFactory.merge({ neurologistId: n1.id, patientId: p1.id }).create();
    await NeurologistPatientFactory.merge({ neurologistId: n1.id, patientId: p2.id }).create();
    await NeurologistPatientFactory.merge({ neurologistId: n1.id, patientId: p3.id }).create();
    await NeurologistPatientFactory.merge({ neurologistId: n1.id, patientId: p4.id }).create();
  }
}
