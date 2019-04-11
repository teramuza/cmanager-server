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
	Route.post('teacher', 'TeacherController.store').middleware(['auth'])
	Route.get('teacher/:id', 'TeacherController.show')
	Route.patch('teacher/:id', 'TeacherController.update').middleware(['auth'])
	Route.delete('teacher/:id', 'TeacherController.destroy').middleware(['auth'])

	Route.get('students', 'StudentController.index').middleware(['auth'])
	Route.post('student', 'StudentController.store').middleware(['auth'])
	Route.get('student/:id', 'StudentController.show')
	Route.patch('student/:id', 'StudentController.update').middleware(['auth'])
	Route.delete('student/:id', 'StudentController.destroy').middleware(['auth'])

	Route.get('classes', 'ClassController.index').middleware(['auth'])
	Route.post('class','ClassController.store').middleware(['auth'])
	Route.get('class/:id', 'ClassController.show')
	Route.patch('class/:id', 'ClassController.update').middleware(['auth'])
	Route.delete('class/:id', 'ClassController.destroy').middleware(['auth'])

	Route.get('classes/types', 'ClassController.indexTypes').middleware(['auth'])
	Route.post('class/type', 'ClassController.storeType').middleware(['auth'])
	Route.get('class/type/:id', 'ClassController.showType')
	Route.patch('class/type/:id', 'ClassController.updateType').middleware(['auth'])
	Route.delete('class/type/:id', 'ClassController.destroyType').middleware(['auth'])

	Route.get('courses', 'CoursesClassController.index').middleware(['auth'])
	Route.get('courses/:id/', 'CoursesClassController.show').middleware(['auth'])
	Route.post('courses', 'CoursesClassController.store').middleware(['auth'])
	Route.post('courses/add', 'CoursesClassStudentController.store').middleware(['auth'])
	Route.patch('courses/:id','CoursesClassController.update').middleware(['auth'])
	Route.delete('courses/remove/:id', 'CoursesClassStudentController.destroy').middleware(['auth'])
	Route.delete('courses/:id', 'CoursesClassController.destroy').middleware(['auth'])

	Route.get('pricings/payment/:id', 'PaymentController.create').middleware(['auth'])
	Route.get('pricings/payroll/:id', 'PayrollController.create').middleware(['auth'])

	Route.get('payments', 'PaymentController.index').middleware(['auth'])
	Route.get('payment/:id', 'PaymentController.show').middleware(['auth'])
	Route.post('payment', 'PaymentController.store').middleware(['auth'])

	Route.get('payrolls', 'PayrollController.index').middleware(['auth'])
	Route.get('payroll/:id', 'PayrollController.show').middleware(['auth'])
	Route.post('Payroll', 'PayrollController.store').middleware(['auth'])

}).prefix('cmgr/v1')

