import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CarerPatient from 'App/Models/CarerPatient';

export default class CarerPatientsController {
  public async index({ request }: HttpContextContract) {
    const { carer_id: carerId } = request.params();

    const result = await CarerPatient.query()
      .where('carer_id', carerId)
      .preload('patient', (query) => {
        query.preload('profile');
        query.preload('role');
      })
      .select('patient_id');

    const patients = result.map((p) => p.patient);

    if (patients.length > 0) {
      return patients[patients.length - 1];
    }

    return patients;
  }
}
