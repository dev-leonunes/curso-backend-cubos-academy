const express = require('express')
const {
    encontrarCarro,
    filtrarCarros
} = require('./controladores/carros')

const app = express()

app.get('/carros', filtrarCarros)

app.get('/carros/:id', encontrarCarro)

app.listen(8000)