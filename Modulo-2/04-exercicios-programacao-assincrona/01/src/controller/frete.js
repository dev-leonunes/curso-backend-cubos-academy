const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground')

const listarProdutos = (req, res) => {
    res.json(produtos)
}

const obterProduto = (req, res) => {
    const id = Number(req.params.idProduto)

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id do produto deve ser um número." })
    }

    const produto = produtos.find(produto => produto.id === id)

    if (!produto) {
        return res.status(404).json({ mensagem: "Por favor informe um id de produto válido." })
    }

    return res.status(200).json(produto)
}

const obterFrete = async (req, res) => {
    const id = Number(req.params.idProduto)
    const cep = req.params.cep

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id do produto deve ser um número." })
    }

    const produto = produtos.find(produto => produto.id === id)

    if (!produto) {
        return res.status(404).json({ mensagem: "Por favor informe um id de produto válido." })
    }

    let frete = 0;

    const estado = await getStateFromZipcode(cep);

    if (estado === undefined) {
        return res.status(404).json({ mensagem: "Informe um Cep válido." })
    }

    if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        frete = 10;
    } else if (estado === 'RJ' || estado === 'SP') {
        frete = 15;
    } else {
        frete = 12;
    }

    const valorFrete = (produto.valor / 100) * frete

    const freteProduto = {
        produto,
        estado,
        frete: valorFrete
    }

    return res.json(freteProduto)
}

module.exports = {
    listarProdutos,
    obterProduto,
    obterFrete
}