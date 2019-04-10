'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
	coursesClassStudents(){
		return this.hasMany('App/Models/CoursesClassStudents')
	}
}

module.exports = Student
