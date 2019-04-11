'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payroll extends Model {
	coursesClasses(){
		return this.belongsTo('App/Models/CoursesClass')
	}
	teacher(){
		return this.belongsTo('App/Models/Teacher')
	}
}

module.exports = Payroll
