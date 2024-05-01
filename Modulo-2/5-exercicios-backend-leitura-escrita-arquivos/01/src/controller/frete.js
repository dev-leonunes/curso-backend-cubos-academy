const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground')

const listarProdutos = (req, res) => {
    res.status(200).json(produtos)
}

const obterProduto = (req, res) => {
    const id = req.params.idProduto
    const produto = produtos.find(produto => produto.id === Number(id))

    if (!produto) {
        return res.status(404).json({ mensagem: "Por favor informe um id de produto válido." })
    }

    return res.status(200).json(produto)
}

const obterFrete = async (req, res) => {
    const { idProduto, cep } = req.params

    const produto = produtos.find(produto => produto.id === Number(idProduto))

    if (!produto) {
        return res.status(404).json({ mensagem: "Por favor informe um id de produto válido." })
    }

    try {
        const estado = await getStateFromZipcode(cep);
        let frete = 0;

        if (estado === undefined) {
            return res.status(404).json({ mensagem: "Informe um Cep válido." })
        }

        if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
            frete = 0.1;
        } else if (estado === 'RJ' || estado === 'SP') {
            frete = 0.15;
        } else {
            frete = 0.12;
        }

        const valorFrete = produto.valor * frete

        const freteProduto = {
            produto,
            estado,
            frete: valorFrete
        }

        return res.status(200).json(freteProduto)

    } catch (erro) {
        return res.status(400).json({ Erro: erro.message })
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    obterFrete
}