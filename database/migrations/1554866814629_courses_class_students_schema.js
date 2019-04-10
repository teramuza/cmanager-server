'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursesClassStudentsSchema extends Schema {
  up () {
    this.create('courses_class_students', (table) => {
      table.increments()
      table.integer('courses_class_id').unsigned().references('id').inTable('courses_classes')
      table.integer('students_id').unsigned().references('id').inTable('students')
      table.timestamps()
    })
  }

  down () {
    this.drop('courses_class_students')
  }
}

module.exports = CoursesClassStudentsSchema
