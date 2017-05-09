'use strict'

const Lucid = use('Lucid')

class Rak extends Lucid {
	static get table (){
	    return 'rak'
	}
	static get primaryKey(){
	    return 'id_rak'
	}
}

module.exports = Rak
