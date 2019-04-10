'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassTypesSchema extends Schema {
  up () {
    this.create('class_types', (table) => {
      table.increments()
      table.integer('class_id').unsigned().references('id').inTable('classes')
      table.string('type').notNullable()
      table.bigInteger('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('class_types')
  }
}

module.exports = ClassTypesSchema
