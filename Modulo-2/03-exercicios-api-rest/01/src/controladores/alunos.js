const alunos = require('../dados/alunos');

let identificador = 1

const listarAlunos = (req, res) => {
    res.status(200).json(alunos)
}

const validarId = (req, res) => {
    const { id } = req.params
    const identificador = Number(id)

    if (isNaN(identificador)) {
        return res.status(400).json({ mensagem: "O id deve ser um número" })
    }

    const aluno = alunos.find((aluno) => aluno.id === identificador)

    if (!aluno) {
        return res.status(404).json({ mensagem: "Por favor informe um id válido" })
    }

    return res.status(200).json(aluno)
}

const addAluno = (req, res) => {
    let { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: "Informe os campos do aluno corretamente" })
    }

    if (+idade < 18) {
        return res.status(400).json({ mensagem: "Minimo de 18 anos para cadastrar um aluno" })
    }

    nome = nome.trim()
    sobrenome = sobrenome.trim()
    curso = curso.trim()

    if (nome === "" || sobrenome === "" || curso === "") {
        return res.status(400).json({ mensagem: "Os campos do aluno não podem estar vazias" })
    }

    const aluno = {
        id: identificador++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno)

    res.status(201).send()
}

const delAluno = (req, res) => {
    const id = Number(req.params.id)
    let idAlunoDel = -1

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O id do aluno a ser deletado deve ser um número." })
    }

    const alunoDelIndex = alunos.findIndex(aluno => aluno.id === id)

    if (alunoDelIndex === -1) {
        return res.status(404).json({ mensagem: "Por favor informe um id válido do aluno a ser deletado." })
    }

    const alunoDeletado = alunos.splice(alunoDelIndex, 1)[0]

    return res.status(200).json(alunoDeletado)
}


module.exports = {
    listarAlunos,
    validarId,
    addAluno,
    delAluno
}