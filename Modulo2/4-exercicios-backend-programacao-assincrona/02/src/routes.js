const express = require('express')
const {
    listaDePokemons,
    detalhesDePokemons
} = require('./controllers/pokemons')

const routes = express();

routes.get('/pokemon', listaDePokemons);
routes.get('/pokemon/:pokemon', detalhesDePokemons);

module.exports = routes;