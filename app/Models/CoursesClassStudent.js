'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CoursesClassStudent extends Model {
	coursesClasses(){
		return this.belongsTo('App/Models/CoursesClass').with('teacher').with('classTypes')
	}

	students(){
		return this.belongsTo('App/Models/Student')
	}

	attendances(){
		return this.hasOne('App/Models/Attendance')
	}

	payments(){
		return this.hasOne('App/Models/Payment')
	}
}

module.exports = CoursesClassStudent
