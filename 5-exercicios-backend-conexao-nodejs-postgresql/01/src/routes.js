const express = require('express');
const {
    criarAutor,
    listarAutor
} = require('./controller/biblioteca');

const routes = express();

routes.post('/autor', criarAutor);
routes.get('/autor/:id', listarAutor);

module.exports = routes;