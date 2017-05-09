'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
// user
Route.resource('users', 'UserController')
// login
Route.post('login', 'UserController.postLogin')

Route.group('v1', function(){
    Route.resource('books', 'BookController')
    Route.resource('rak', 'RakController')
    Route.resource('pendapatan', 'PendapatanController')
    Route.resource('kategori', 'KategoriController')
    Route.resource('denda', 'DendaController')
    Route.resource('buku', 'BukuController')
    Route.resource('anggota', 'AnggotaController')
}).prefix('api').middleware('auth')

Route.post('posts', function * (request, response) {
  const body = request.all()
  response.send(body)
})