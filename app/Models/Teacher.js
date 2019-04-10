'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teacher extends Model {
	coursesClasses(){
		return this.hasMany('App/Models/CoursesClass').withCount('coursesClassStudents as students')
	}
}

module.exports = Teacher
