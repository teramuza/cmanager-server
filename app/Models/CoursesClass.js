'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CoursesClass extends Model {
	coursesClassStudents(){
		return this.hasMany('App/Models/CoursesClassStudent')
	}

	payroll(){
		return this.hasOne('App/Models/Payroll')
	}
}

module.exports = CoursesClass
