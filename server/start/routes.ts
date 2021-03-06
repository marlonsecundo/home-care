/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
  return { hello: 'world' };
});

Route.resource('users', 'UsersController').apiOnly();

Route.resource('roles', 'RolesController').apiOnly();

Route.resource('neurologists.patients', 'NeurologistPatientsController').apiOnly();

Route.resource('carers.patients', 'CarerPatientsController').apiOnly();

Route.resource('users.logs', 'PatientLogsController').apiOnly();

Route.resource('neurologists', 'NeurologistsController').apiOnly();

Route.resource('carers', 'CarersController').apiOnly();

Route.resource('patients', 'PatientsController').apiOnly();

Route.post('/login', 'AuthController.login');

Route.post('/signup', 'UsersController.store');
