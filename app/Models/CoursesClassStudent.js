'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CoursesClassStudent extends Model {
	coursesClasses(){
		return this.belongsTo('App/Models/CoursesClasses')
	}

	students(){
		return this.belongsTo('App/Models/Students')
	}

	attendances(){
		return this.hasOne('App/Models/Students')
	}

	payments(){
		return this.hasOne('App/Models/Payments')
	}
}

module.exports = CoursesClassStudent
