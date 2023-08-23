const express = require('express');
const { get, getPorId } = require('./controladores/imoveis');

const app = express()

const rotas = {
    rota1: app.get('/imoveis', get),
    rota2: app.get('/imoveis/:id', getPorId),
    porta: app.listen(8000)
}

module.exports = { rotas }