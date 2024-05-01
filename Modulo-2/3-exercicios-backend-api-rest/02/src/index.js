const express = require('express');
const routes = require('./rotas');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000);