'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClassType extends Model {
	classes(){
		return this.belongsTo('App/Models/Classes')
	}

	coursesClasses(){
		return this.hasMany('App/Models/CoursesClasses')

	}

}

module.exports = ClassType
