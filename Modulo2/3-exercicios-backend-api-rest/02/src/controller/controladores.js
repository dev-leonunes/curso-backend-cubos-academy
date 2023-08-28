const convidados = require('../data/dados');

const listarConvidados = (req, res) => {
    const { nome } = req.query

    if (!nome) {
        return res.json(convidados)
    }

    const convidado = convidados.find((convidado) => convidado === nome)

    if (!convidado) {
        return res.json({ mensagem: "O convidado buscado não está presente na lista." })
    }

    res.json({ mensagem: "Convidado presente." })
}

const addConvidado = (req, res) => {
    const novoConvidado = String(req.body.nome)

    const jaTemNaLista = convidados.find((convidado) => convidado === novoConvidado)

    if (jaTemNaLista) {
        return res.json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }

    convidados.push(novoConvidado)
    res.json({ mensagem: "Convidado adicionado." })
}

const delConvidado = (req, res) => {
    const nomeDesconvidado = req.params.nome

    const indexDesconvidado = convidados.findIndex((convidado) => convidado === nomeDesconvidado)

    if (indexDesconvidado === -1) {
        return res.json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    convidados.splice(indexDesconvidado, 1)
    res.json({ mensagem: "Convidado removido." })
}


module.exports = {
    listarConvidados,
    addConvidado,
    delConvidado
}