'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Class extends Model {
	classTypes(){
		return this.hasMany('App/Models/ClassTypes')
	}
}

module.exports = Class
