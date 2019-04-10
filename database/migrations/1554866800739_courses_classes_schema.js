'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursesClassesSchema extends Schema {
  up () {
    this.create('courses_classes', (table) => {
      table.increments()
      table.integer('class_id').unsigned().references('id').inTable('class_types')
      table.integer('teacher_id').unsigned().references('id').inTable('teachers')
      table.boolean('is_active').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('courses_classes')
  }
}

module.exports = CoursesClassesSchema
