import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CarerPatient from 'App/Models/CarerPatient';
import NeurologistPatient from 'App/Models/NeurologistPatient';
import User from 'App/Models/User';

export default class UsersController {
  public async index({}: HttpContextContract) {
    return User.all();
  }

  public async store({ request }: HttpContextContract) {
    const requestBody = request.all();

    const user = await User.create(requestBody.user);

    await user.related('profile').create(requestBody.profile);
    await user.related('role').create(requestBody.role);

    if (requestBody.neurologist) {
      await NeurologistPatient.create({
        neurologistId: requestBody.neurologist.id,
        patientId: user.id,
      });
    }

    if (requestBody.carer) {
      await CarerPatient.create({
        patientId: requestBody.carer.id,
        carerId: user.id,
      });
    }

    return user;
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params();

    return User.findByOrFail('id', id);
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
