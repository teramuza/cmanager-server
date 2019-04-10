'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('phone_number',20)
      table.string('email').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema
