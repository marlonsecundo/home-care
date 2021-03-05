import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.all();
    const token = await auth.use('api').attempt(email, password);
    const user = token.user;

    await user.load('role');
    await user.load('profile');

    return { token: token.toJSON().token, user: token.user.toJSON() };
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.authenticate();

    return auth.use('api').logout();
  }
}
