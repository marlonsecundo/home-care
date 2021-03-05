import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class CarersController {
  public async index({}: HttpContextContract) {
    return User.query()
      .preload('profile')
      .preload('role')
      .whereHas('role', (query) => {
        query.where('type', 'CARER');
      });
  }
}
