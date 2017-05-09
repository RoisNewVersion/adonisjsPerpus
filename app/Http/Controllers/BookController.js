'use strict'

const Book = use('App/Model/Book')

class BookController {

  * index(request, response) {
    const bk = yield Book.paginate(request.input('page'), request.input('perpage'))
    // const bk = yield Book.all()
    response.json(bk)
  }

  * create(request, response) {
    
  }

  * store(request, response) {
    const post = yield Book.create({
      title: request.input('title'),
      author: request.input('author'),
      publisher: request.input('publisher')
    })
    if (post) {
      response.json({msg: 'sukses tambah data', error: false, type: 'success'})
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
    const update = yield Book.findBy('id', request.input('id'))
    update.author = request.input('author')
    update.title = request.input('title')
    update.publisher = request.input('publisher')
    if (yield update.save()) {
      response.json({msg: 'sukses update', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal update', error: true, type: 'error'})
    }
    // response.json({a: update.author})
  }

  * destroy(request, response) {
    const del = yield Book.findBy('id', request.param('id'))

    if (yield del.delete()) {
      response.json({msg: 'sukses delete', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal update', error: true, type: 'error'})
    }
  }

}

module.exports = BookController
