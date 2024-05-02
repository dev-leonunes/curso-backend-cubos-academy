const { jogadores } = require('../bancodedados')

let i = 0

const rodada = (req, res) => {
    const nomeDoJogador = jogadores[i]
    i = (i + 1) % jogadores.length
    const mensagem = `É a vez de ${nomeDoJogador} jogar!`;
    res.send(mensagem)
}

const removerJogador = (req, res) => {
    const { indice } = req.query;
    i = Number(indice)

    if (i >= jogadores.length) {
        const mensagem = `Não existe jogador no índice informado (${i}) para ser removido.`
        i = 0
        return res.send(mensagem)
    }

    jogadores.splice(i, 1)
    res.send(jogadores)
    i = 0
}

const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    i = Number(indice)

    if (nome && indice < jogadores.length) {
        jogadores.splice(i, 0, nome)
        res.send(jogadores)
    } else if (indice >= jogadores.length) {
        res.send(`O índice informado (${i}) não existe no array. Novo jogador não foi adicionado.`)
    } else {
        jogadores.push(nome)
        res.send(jogadores)
    }

    i = 0
}

module.exports = {
    rodada,
    removerJogador,
    adicionarJogador
}