'use strict'

/*
|--------------------------------------------------------------------------
| PayrollSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Pay = use('App/Models/Payroll')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PayrollSeeder {
  async run () {
  	const pay1 = new Pay()
  	pay1.teacher_id = 1
  	pay1.courses_class_id = 2
  	pay1.students_count = 2
  	pay1.total = 3000000
  	pay1.date = new Date()
  	await pay1.save()

  	const pay2 = new Pay()
  	pay2.teacher_id = 2
  	pay2.courses_class_id = 1
  	pay2.students_count = 1
  	pay2.total = 1500000
  	pay2.date = new Date()
  	await pay2.save()

  }
}

module.exports = PayrollSeeder
