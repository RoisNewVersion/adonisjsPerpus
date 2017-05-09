'use strict'
const Rak = use('App/Model/Rak')
class RakController {

  * index(request, response) {
    const rak = yield Rak.all()
    response.json(rak)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const create = yield Rak.create({
      nama_rak: request.input('nama_rak').toUpperCase()
    })
    if (create) {
      response.json({msg: 'sukses tambah data', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal insert', error: true, type: 'error'})
    }
    // response.json({ab: 'test create'})

  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    const update = yield Rak.findBy('id_rak', request.param('id'))
    update.nama_rak = request.input('nama_rak')
    
    if (yield update.save()) {
      response.json({msg: 'sukses update data', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal update', error: true, type: 'error'})
    }
  }

  * destroy(request, response) {
    const del = yield Rak.findBy('id_rak', request.param('id'))
    if (yield del.delete()) {
      response.json({msg: 'sukses hapus data', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal hapus', error: true, type: 'error'})
    }
  }

}

module.exports = RakController
