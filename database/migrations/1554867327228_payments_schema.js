'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentsSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.integer('teacher_id').unsigned().references('id').inTable('teachers')
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.integer('class_type_id').unsigned().references('id').inTable('class_types')
      table.integer('courses_class_student_id').unsigned().references('id').inTable('courses_class_students')
      table.bigInteger('cost')
      table.date('date')
      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentsSchema
