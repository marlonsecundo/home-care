import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PatientLog from 'App/Models/PatientLog';

export default class PatientLogsController {
  public async index({}: HttpContextContract) {
    return PatientLog.all();
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
