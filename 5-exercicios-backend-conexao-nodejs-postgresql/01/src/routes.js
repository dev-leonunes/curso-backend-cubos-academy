const express = require('express');
const {
    postAuthor,
    postBook,
    getAuthor,
    getBooks
} = require('./controller/biblioteca');

const routes = express();

routes.post('/autor', postAuthor);
routes.get('/autor/:id', getAuthor);
routes.post('/autor/:id/livros', postBook);
routes.get('/livros', getBooks);

module.exports = routes;