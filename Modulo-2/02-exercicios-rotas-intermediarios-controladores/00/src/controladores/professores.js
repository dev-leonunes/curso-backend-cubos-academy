const professores = require('../bancodedados')

const filtrarProfesores = (req, res) => {
    const { stack } = req.query
    let resultado = professores

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        })
    }

    res.send(resultado)
}

const encontrarProfessor = (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id == req.params.id
    })
    res.send(professorEncontrado)
}

module.exports = {
    filtrarProfesores,
    encontrarProfessor
}