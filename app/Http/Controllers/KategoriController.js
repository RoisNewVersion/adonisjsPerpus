'use strict'
const Kategori = use('App/Model/Kategori')

class KategoriController {

  * index(request, response) {
    const kat = yield Kategori.all()
    response.json(kat)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const create = yield Kategori.create({
      nama_kategori: request.input('nama_kategori').toUpperCase()
    })
    if (create) {
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
    const update = yield Kategori.findBy('id_kategori', request.param('id'))
    update.nama_kategori = request.input('nama_kategori')
    
    if (yield update.save()) {
      response.json({msg: 'sukses update data', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal update', error: true, type: 'error'})
    }
  }

  * destroy(request, response) {
    const del = yield Kategori.findBy('id_kategori', request.param('id'))
    if (yield del.delete()) {
      response.json({msg: 'sukses hapus data', error: false, type: 'success'})
    }else{
      response.json({msg: 'gagal hapus', error: true, type: 'error'})
    }
  }

}

module.exports = KategoriController
