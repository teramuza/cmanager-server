'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {
	coursesClassStudents(){
		return this.belongsTo('App/Models/CoursesClassStudents')
	}
	student(){
		return this.belongsTo('App/Models/Student')
	}
	teacher(){
		return this.belongsTo('App/Models/Teacher')
	}
	classType(){
		return this.belongsTo('App/Models/ClassType')
	}
}

module.exports = Payment
