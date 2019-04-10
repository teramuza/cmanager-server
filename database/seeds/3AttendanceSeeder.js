'use strict'

/*
|--------------------------------------------------------------------------
| AttendanceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Attendance = use('App/Models/Attendance')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AttendanceSeeder {
  async run () {
  	const dump1 = new Attendance()
  	dump1.courses_class_student_id = 1
  	dump1.date = new Date()
  	dump1.status = 'Absent'
  	await dump1.save()

	const dump2 = new Attendance()
  	dump2.courses_class_student_id = 2
  	dump2.date = new Date()
  	dump2.status = 'Attend'
  	await dump2.save()
  }
}

module.exports = AttendanceSeeder
