const express = require('express');

const {
    createNewUser,
    loginUser
} = require('./controllers/users');

const {
    registerPokemon,
    pokemonAliasUpdate,
    listPokemons,
    listPokemonById,
    deletePokemon
} = require('./controllers/pokemons');

const verifyLoggedUser = require('./middlewares/authentication');

const routes = express();

routes.post('/usuario/cadastrar', createNewUser);
routes.post('/usuario/login', loginUser);

routes.use(verifyLoggedUser);

routes.post('/pokemon/cadastrar', registerPokemon);
routes.patch('/:pokemon_id/apelido', pokemonAliasUpdate);
routes.get('/pokemon', listPokemons);
routes.get('/pokemon/:id', listPokemonById);
routes.delete('/pokemon/delete/:id', deletePokemon);

module.exports = routes;