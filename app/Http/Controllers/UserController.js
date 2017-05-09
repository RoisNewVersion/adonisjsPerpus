'use strict'

const User = use('App/Model/User')

class UserController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const post = yield User.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password')
    })
    if (post) {
    	const token = yield request.auth.generate(post)
      response.json({msg: 'sukses tambah data', error: false, type: 'success', jwt: token})
    }else{
      response.json({msg: 'gagal insert', error: true, type: 'error'})
    }
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }
  // postLogin
  * postLogin(request, response){
  	const uid = request.input('email')
  	const password = request.input('password')
  	try {
  	  const token = yield request.auth.attempt(uid, password)
  	  if (token) {
  	  	// const token = yield request.auth.generate(post)
  	    response.json({msg: 'login berhasil', error: false, type: 'success', token: token})
  	  }/*else{
  	    response.json({msg: 'gagal login', error: true, type: 'error'})
  	  }*/        
  	} catch (e) {
  	  response.unauthorized({error: e.message})
  	}
  }

}

module.exports = UserController
