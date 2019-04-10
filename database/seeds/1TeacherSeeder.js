'use strict'

/*
|--------------------------------------------------------------------------
| TeacherSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Teacher = use('App/Models/Teacher')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TeacherSeeder {
  async run () {

  	const dump1 = new Teacher()
  	dump1.name = "Arimbi"
  	await dump1.save()

  	const dump2 = new Teacher()
  	dump2.name = "Sumire"
  	await dump2.save()

  	// const dump3 = new Teacher()
  	// dump3.name = "Rosyid"
  	// await dump3.save()

  	// const dump4 = new Teacher()
  	// dump4.name = "Ari"
  	// await dump4.save()

  }
}

module.exports = TeacherSeeder
