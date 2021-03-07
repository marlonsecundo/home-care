import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NeurologistPatient from 'App/Models/NeurologistPatient';
import Event from '@ioc:Adonis/Core/Event';

export default class NeurologistPatientsController {
  public async index({ request }: HttpContextContract) {
    const { neurologist_id: neurologistId } = request.params();

    const result = await NeurologistPatient.query()
      .where('neurologist_id', neurologistId)
      .preload('patient', (query) => {
        query.preload('profile');
        query.preload('role');
      })
      .select('patient_id');

    const patients = result.map((p) => p.patient);

    return patients;
  }

  public async store({ request }: HttpContextContract) {
    const { neurologist_id: neurologistId } = request.params();

    const { patientId } = request.all();

    return NeurologistPatient.create({ neurologistId, patientId });
  }

  public async update({ request }: HttpContextContract) {
    const { id: patientId } = request.params();
    const requestBody = request.all();

    const result = await NeurologistPatient.findBy('patient_id', patientId);

    await result!.preload('patient', (query) => {
      query.preload('profile');
    });

    const patientProfile = result!.patient.profile;

    patientProfile.intervention = requestBody.intervention;
    await patientProfile.save();

    await Event.emit('edit:intervention', patientProfile);

    return result!.patient;
  }

  public async destroy({}: HttpContextContract) {}
}
