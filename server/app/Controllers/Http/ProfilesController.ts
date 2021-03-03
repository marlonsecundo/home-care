import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Profile from 'App/Models/Profile';

export default class ProfilesController {
  public async index({}: HttpContextContract) {
    return Profile.all();
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
