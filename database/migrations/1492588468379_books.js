'use strict'

const Schema = use('Schema')

class BooksTableSchema extends Schema {

  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('title')
      table.string('author')
      table.string('publisher')
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }

}

module.exports = BooksTableSchema
