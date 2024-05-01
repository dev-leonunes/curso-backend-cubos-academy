const livros = require('../data/livros');

const listarLivros = (req, res) => {
    res.json(livros)
}

const consultarLivro = (req, res) => {
    const { id } = req.params
    const idBusca = Number(id)

    if (isNaN(idBusca)) return res.json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })

    const livroEncontrado = livros.find((livro) => livro.id === idBusca)

    if (!livroEncontrado) return res.json({ mensagem: "Não existe livro para o ID informado." })

    res.json(livroEncontrado)
}

let idDoProximoLivro = 3

const adicionarlivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) return res.json({ mensagem: "Por favor informe todos os campos com valores válidos." })

    const novoLivro = {
        id: idDoProximoLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro)
    res.status(201).json(novoLivro)
}

const substituirLivro = (req, res) => {
    const { id } = req.params
    const idBusca = Number(id)

    if (isNaN(idBusca)) return res.json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })

    const livroEncontrado = livros.find((livro) => livro.id === idBusca)

    if (!livroEncontrado) return res.json({ mensagem: "Não existe livro a ser substituído para o ID informado." })

    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) return res.json({ mensagem: "Por favor informe todos os campos com valores válidos." })

    const livroSubstituir = {
        id: livroEncontrado.id,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.splice((idBusca - 1), 1, livroSubstituir)
    res.json({ mensagem: "Livro substituído." })
}

const alterarLivro = (req, res) => {
    const { id } = req.params
    const idBusca = Number(id)

    if (isNaN(idBusca)) return res.json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })

    const livroEncontrado = livros.find((livro) => livro.id === idBusca)

    if (!livroEncontrado) return res.json({ mensagem: "Não existe livro a ser alterado para o ID informado." })

    const alteracoes = req.body;

    for (const propriedade in alteracoes) {
        if (propriedade === 'id') {
            return res.json({ mensagem: "Não é possível alterar o parâmetro ID de um livro." })
        }
        livroEncontrado[propriedade] = alteracoes[propriedade];
    }

    return res.json({ mensagem: "Livro alterado." });
}

const deletarLivro = (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    const deletarLivro = livros.findIndex(aluno => aluno.id === id)

    if (deletarLivro === -1) {
        return res.json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }

    livros.splice(deletarLivro, 1)[0]
    return res.json({ mensagem: "Livro removido." })
}

module.exports = {
    listarLivros,
    consultarLivro,
    adicionarlivro,
    substituirLivro,
    alterarLivro,
    deletarLivro
}