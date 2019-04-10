'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')
const Factory = use('Factory')

class UserSeeder {
  async run () {
  	const admin = new User()
    admin.name = 'Admin'
  	admin.password ='1234'
  	admin.email = 'admin@gmail.com'
  	await admin.save()

  	const dump0 = new User()
    dump0.name = 'User'
    dump0.password = 'password'
    dump0.email = 'user@mail.com'
    await dump0.save()

    const dump1 = new User()
    dump1.name = 'User 1'
    dump1.password = 'password'
    dump1.email = 'user1@mail.com'
    await dump1.save()
  }
}

module.exports = UserSeeder
