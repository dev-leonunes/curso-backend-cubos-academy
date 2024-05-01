const express = require('express');
const {
    listarConvidados,
    addConvidado,
    delConvidado
} = require('./controller/controladores');

const routes = express();

routes.get('/convidados', listarConvidados);
routes.post('/convidados', addConvidado);
routes.delete('/convidados/:nome', delConvidado)

module.exports = routes;