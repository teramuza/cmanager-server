'use strict'

/*
|--------------------------------------------------------------------------
| ClassSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Class = use('App/Models/Class') 
const ClassType = use('App/Models/ClassType')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ClassSeeder {
  async run () {
  	const dump1 = new Class()
  	dump1.name = 'Kelas Musik'
  	await dump1.save()

  	const dump2 = new Class()
  	dump2.name = 'Kelas Tari'
  	await dump2.save()

  	const type1 = new ClassType()
  	type1.class_id = 1
  	type1.type = 'Beginner'
  	type1.price = 2000000
  	await type1.save()

  	const type2 = new ClassType()
  	type2.class_id = 1
  	type2.type = 'Intermediate'
  	type2.price = 2500000
  	await type2.save()

  	const type3 = new ClassType()
  	type3.class_id = 2
  	type3.type = 'Beginner'
  	type3.price = 1500000
  	await type3.save()
  }
}

module.exports = ClassSeeder
