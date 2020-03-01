require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')

const routes = require('./routes')
const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(routes)

server.listen(3333)