const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

//index, show, store, update, destroy
//index = listagem de vários itens
//show = listagem de um único item
//store = criação de um item
//update = alteração de um item
//destroy = remoção de um  item

module.exports = {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        const userData = await axios.get(`https://api.github.com/users/${github_username}`)
        
        let dev = await Dev.findOne({ github_username })

        if(!dev){
            const { name = login, avatar_url, bio } = userData.data
        
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username, 
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            }).catch(e => console.log(e))
        }

        return res.json(dev)
    },

    async index(req, res) {
        const devs = await Dev.find()

        return res.json(devs)
    },

    async update(req, res) {

    },

    async destroy(req, res) {
        
    }
}