const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

// MongoDB (BD Não-relacional)
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-4t7ay.mongodb.net/omnistack10?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

app.use(express.json()) // usado para o express entender o BODY com informações do tipo JSON
app.use(routes)

app.listen(3333)