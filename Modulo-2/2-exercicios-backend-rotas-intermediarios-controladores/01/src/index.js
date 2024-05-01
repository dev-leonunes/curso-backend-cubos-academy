const express = require('express');
const { soma, subtracao, multiplicacao, divisao } = require('./controladores/calculadora')
const { validarRequerimento } = require('./intermediario')

const app = express();

app.use(validarRequerimento)

app.get('/somar', soma)

app.get('/subtrair', subtracao)

app.get('/multiplicar', multiplicacao)

app.get('/dividir', divisao)

app.listen(3000)