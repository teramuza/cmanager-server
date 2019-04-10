'use strict'

/*
|--------------------------------------------------------------------------
| StudentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Student = use('App/Models/Student')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class StudentSeeder {
  async run () {
  	const dump1 = new Student()
  	dump1.name = 'Doni'
  	dump1.phone_number = '+62 8178 8888 8888'
  	dump1.email = 'doni@gmail.com'
  	await dump1.save()

	const dump2 = new Student()
  	dump2.name = 'Erna'
  	dump2.phone_number = '+62 856 1111 1111'
  	dump2.email = 'erna@gmail.com'
  	await dump2.save()

  	const dump3 = new Student()
  	dump3.name = 'Marni'
  	dump3.phone_number = '+62 8178 2222 1111'
  	dump3.email = 'marni@gmail.com'
  	await dump3.save() 
  }
}

module.exports = StudentSeeder
