'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
	//auth
	Route.post('auth/login', 'AuthController.login').middleware(['guest'])
	Route.post('auth/logout', 'AuthController.revokeUserToken').middleware(['auth'])

	//cmanager
	Route.get('teachers', 'TeacherController.index').middleware(['auth'])
	Route.get('students', 'StudentController.index').middleware(['auth'])
	Route.get('classes', 'ClassController.index').middleware(['auth'])
	Route.get('courses', 'CoursesClassController.index').middleware(['auth'])
	Route.get('courses/:id/', 'CoursesClassController.show').middleware(['auth'])
	Route.get('pricings', 'ClassTypeController.index').middleware(['auth'])
	Route.get('payments', 'PaymentController.index').middleware(['auth'])
	Route.get('payrolls', 'PayrollController.index').middleware(['auth'])

}).prefix('cmgr/v1')

