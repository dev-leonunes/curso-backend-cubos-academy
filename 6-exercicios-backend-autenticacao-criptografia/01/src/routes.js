const express = require('express');
const {
    createNewUser,
    loginUser
} = require('./controllers/users');

const routes = express();

routes.post('/usuario/cadastrar', createNewUser);
routes.post('/usuario/login', loginUser);

routes.post('/?');
routes.patch('/?');
routes.get('/?');
routes.get('/?/:id');
routes.delete('/:');


module.exports = routes;