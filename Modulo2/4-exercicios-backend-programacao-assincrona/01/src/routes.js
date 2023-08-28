const express = require('express')
const {
    listarProdutos,
    obterProduto,
    obterFrete
} = require('./controller/frete')

const routes = express();

routes.get('/produtos', listarProdutos);
routes.get('/produtos/:idProduto', obterProduto);
routes.get('/produtos/:idProduto/frete/:cep', obterFrete);

module.exports = routes;