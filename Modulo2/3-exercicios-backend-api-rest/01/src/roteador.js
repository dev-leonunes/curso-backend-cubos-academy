const express = require('express');
const validarSenha = require('./intermediarios');
const {
    listarAlunos,
    validarId,
    addAluno,
    delAluno
} = require('./controladores/alunos')

const routes = express();

// routes.use(validarSenha);

routes.get('/alunos', listarAlunos);
routes.get('/alunos/:id', validarId);
routes.post('/alunos', addAluno);
routes.delete('/alunos/:id', delAluno)

module.exports = routes;