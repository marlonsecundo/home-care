import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Role from 'App/Models/Role';

export default class RolesController {
  public async index({}: HttpContextContract) {
    return Role.all();
  }

  public async store({}: HttpContextContract) {}

  public async show({ request }: HttpContextContract) {
    const { id } = request.params();

    return Role.findByOrFail('id', id);
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
