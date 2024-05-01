const soma = (req, res) => {
    const { num1, num2 } = req.query;
    let primeiroNumero = Number(num1)
    let segundoNumero = Number(num2)
    let resultado = primeiroNumero + segundoNumero

    res.send(String(resultado))
}

const subtracao = (req, res) => {
    const { num1, num2 } = req.query;
    let primeiroNumero = Number(num1)
    let segundoNumero = Number(num2)
    let resultado = primeiroNumero - segundoNumero

    res.send(String(resultado))
}

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query;
    let primeiroNumero = Number(num1)
    let segundoNumero = Number(num2)
    let resultado = primeiroNumero * segundoNumero

    res.send(String(resultado))
}

const divisao = (req, res) => {
    const { num1, num2 } = req.query;
    let primeiroNumero = Number(num1)
    let segundoNumero = Number(num2)
    let resultado = primeiroNumero / segundoNumero

    res.send(String(resultado))
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}