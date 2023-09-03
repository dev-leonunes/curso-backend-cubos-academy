const express = require('express')
const {
    rodada,
    removerJogador,
    adicionarJogador
} = require('./controladores/jogadores')

const app = express();

app.get('/', rodada);

app.get('/remover', removerJogador);

app.get('/adicionar', adicionarJogador);

app.listen(8000)