const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

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

routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body
    const userData = await axios.get(`https://api.github.com/users/${github_username}`)
    
    const { name = login, avatar_url, bio } = userData.data

    const techsArray = techs.split(',').map(tech => tech.trim())

    const dev = await Dev.create({
        github_username, 
        name,
        avatar_url,
        bio,
        techs: techsArray
    })

    res.json(dev)
})

module.exports = routes