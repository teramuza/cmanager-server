'use strict'

/*
|--------------------------------------------------------------------------
| PaymentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Pay = use('App/Models/Payment')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PaymentSeeder {
  async run () {
  	const pay1 = new Pay()
  	pay1.teacher_id = 1
  	pay1.student_id = 2
  	pay1.class_type_id = 3
  	pay1.courses_class_student_id = 2
  	pay1.date = new Date()
  	await pay1.save()

  	const pay2 = new Pay()
  	pay2.teacher_id = 2
  	pay2.student_id = 1
  	pay2.class_type_id = 1
  	pay2.courses_class_student_id = 1
  	pay2.date = new Date()
  	await pay2.save()
  }
}

module.exports = PaymentSeeder
