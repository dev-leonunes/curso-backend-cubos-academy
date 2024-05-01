const express = require('express');
const detalharEndereco = require('./controller/enderecos')

const app = express();

app.use(express.json());

app.get('/enderecos/:cep', detalharEndereco)

app.listen(3000);