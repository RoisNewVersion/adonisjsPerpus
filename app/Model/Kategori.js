'use strict'

const Lucid = use('Lucid')

class Kategori extends Lucid {
	static get table (){
	    return 'kategori'
	}
	static get primaryKey(){
	    return 'id_kategori'
	}
}

module.exports = Kategori
