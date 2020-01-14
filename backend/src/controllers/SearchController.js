const Dev = require('../models/Dev')

module.exports = {
    async index(req, res){
        // Buscar devs num raio de 10km
        // Filtrar por techs

        console.log(req.query)

        return res.json({ devs: [] })
    }
}