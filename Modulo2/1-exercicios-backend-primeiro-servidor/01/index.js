const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0;

app.get('/', (req, res) => {
    const nomeDoJogador = jogadores[i];
    i = (i + 1) % jogadores.length;
    const mensagem = `É a vez de ${nomeDoJogador} jogar!`;
    res.send(mensagem);
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
