const { Router } = require('express')

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// métodos HTTP:
// get = recebe informação(ex: listagem)
// post = cria informação(ex: salvar produto, cadastrar usuário)
// put = edita informação(ex: editar informações de um produto)
// delete = ?????

// tipos de parâmetros
// query params: req.query (usados para Filtros, Ordenação, Páginação, ...) << usados no GET
// route params: req.params (ex: /users/:id || Identificar um recurso na alteração(PUT) ou remoção(DELETE))
// body: req.body (Dados para alteração ou criação de um registro)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes