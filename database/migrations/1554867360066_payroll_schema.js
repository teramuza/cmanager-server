'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PayrollSchema extends Schema {
  up () {
    this.create('payrolls', (table) => {
      table.increments()
      table.integer('teacher_id').unsigned().references('id').inTable('teachers')
      table.integer('courses_class_id').unsigned().references('id').inTable('courses_classes')
      table.integer('students_count').notNullable()
      table.bigInteger('total').notNullable()
      table.date('date')
      table.timestamps()
    })
  }

  down () {
    this.drop('payrolls')
  }
}

module.exports = PayrollSchema
