'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassesSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClassesSchema
