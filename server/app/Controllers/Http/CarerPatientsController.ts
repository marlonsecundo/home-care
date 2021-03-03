import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CarerPatient from 'App/Models/CarerPatient';

export default class CarerPatientsController {
  public async index({}: HttpContextContract) {
    return CarerPatient.all();
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
