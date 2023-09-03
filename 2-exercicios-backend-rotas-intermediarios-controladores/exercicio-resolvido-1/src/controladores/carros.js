const carros = require('../bancodedados')

const encontrarCarro = (req, res) => {
    let encontrarCarro = carros.find(carro => {
        return carro.id == req.params.id
    });

    res.send(encontrarCarro)
}

const filtrarCarros = (req, res) => {
    const { marca, cor } = req.query
    resultado = carros

    if (marca) {
        resultado = resultado.filter((carros) => {
            return carros.marca === marca
        })
    }

    if (cor) {
        resultado = resultado.filter((carros) => {
            return carros.cor === cor
        })
    }

    res.send(resultado)
}

module.exports = {
    encontrarCarro,
    filtrarCarros
}