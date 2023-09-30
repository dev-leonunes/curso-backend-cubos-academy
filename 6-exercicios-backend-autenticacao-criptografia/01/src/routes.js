const express = require('express');
const {
    createNewUser,
    loginUser
} = require('./controllers/users');
const { registerPokemon } = require('./controllers/pokemons');
const verifyLoggedUser = require('./middlewares/authentication');

const routes = express();

routes.post('/usuario/cadastrar', createNewUser);
routes.post('/usuario/login', loginUser);

routes.use(verifyLoggedUser);

routes.post('/pokemon/cadastrar', registerPokemon);
routes.patch('/?');
routes.get('/?');
routes.get('/?/:id');
routes.delete('/:');


module.exports = routes;