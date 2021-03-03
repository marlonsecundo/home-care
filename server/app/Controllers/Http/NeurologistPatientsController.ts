import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NeurologistPatient from 'App/Models/NeurologistPatient';

export default class NeurologistPatientsController {
  public async index({}: HttpContextContract) {
    return NeurologistPatient.all();
  }

  public async store({ request }: HttpContextContract) {
    const { neurologist_id: neurologistId, id: patientId } = request.params();

    return NeurologistPatient.create({ neurologistId, patientId });
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
