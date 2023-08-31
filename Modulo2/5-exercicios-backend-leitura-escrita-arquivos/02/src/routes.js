const { Router } = require('express')
const {
    listaDePokemons,
    detalhesDePokemons
} = require('./controllers/pokemons')

const routes = Router();

routes.get('/pokemon', listaDePokemons);
routes.get('/pokemon/:pokemon', detalhesDePokemons);

module.exports = routes;