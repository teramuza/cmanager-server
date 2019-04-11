'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CoursesClass extends Model {
	coursesClassStudents(){
		return this.hasMany('App/Models/CoursesClassStudent')
	}

	classTypes(){
		return this.belongsTo('App/Models/ClassType')
	}

	payroll(){
		return this.hasOne('App/Models/Payroll')
	}

	teacher(){
		return this.belongsTo('App/Models/Teacher')
	}
}

module.exports = CoursesClass
