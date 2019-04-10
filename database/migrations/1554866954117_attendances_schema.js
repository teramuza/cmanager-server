'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttendancesSchema extends Schema {
  up () {
    this.create('attendances', (table) => {
      table.increments()
      table.integer('student').unsigned().references('id').inTable('courses_class_students')
      table.date('date').notNullable()
      table.string('status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('attendances')
  }
}

module.exports = AttendancesSchema
