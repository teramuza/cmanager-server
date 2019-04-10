'use strict'

/*
|--------------------------------------------------------------------------
| CourseClassSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Courses = use('App/Models/CoursesClass')
const CoursesStudent = use('App/Models/CoursesClassStudent')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CourseClassSeeder {
  async run () {
  	const dump1 = new Courses()
  	dump1.class_type_id = 1
  	dump1.teacher_id = 2
  	await dump1.save()

  	const dump2 = new Courses()
  	dump2.class_type_id = 2
  	dump2.teacher_id = 1
  	await dump2.save()

  	const class1 = new CoursesStudent()
  	class1.courses_class_id = 1
  	class1.students_id = 1
  	await class1.save()

  	const class2 = new CoursesStudent()
  	class2.courses_class_id = 2
  	class2.students_id = 2
  	await class2.save()

  	const class3 = new CoursesStudent()
  	class3.courses_class_id = 2
  	class3.students_id = 3
  	await class3.save()

  }
}

module.exports = CourseClassSeeder
