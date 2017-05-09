'use strict'

const Lucid = use('Lucid')

class Book extends Lucid {
    static get table (){
        return 'books'
    }
    static get primaryKey(){
        return 'id'
    }
}

module.exports = Book
