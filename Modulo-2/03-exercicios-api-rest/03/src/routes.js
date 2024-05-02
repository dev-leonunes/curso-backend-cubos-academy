const express = require('express');
const {
    listarLivros,
    consultarLivro,
    adicionarlivro,
    substituirLivro,
    alterarLivro,
    deletarLivro
} = require('./controllers/livros');

const routes = express();

routes.get('/livros', listarLivros);
routes.get('/livros/:id', consultarLivro);
routes.post('/livros', adicionarlivro);
routes.put('/livros/:id', substituirLivro);
routes.patch('/livros/:id', alterarLivro);
routes.delete('/livros/:id', deletarLivro);

module.exports = routes;