'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClassType extends Model {
	classes(){
		return this.belongsTo('App/Models/Class')
	}

	coursesClasses(){
		return this.hasMany('App/Models/CoursesClass')

	}

}

module.exports = ClassType
