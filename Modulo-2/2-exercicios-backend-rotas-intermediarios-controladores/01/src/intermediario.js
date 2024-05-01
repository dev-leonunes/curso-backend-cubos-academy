const validarRequerimento = (req, res, next) => {
    const { num1, num2 } = req.query;

    if (!num1) {
        return res.send('Por favor digite um número')
    }

    if (!num2) {
        return res.send('Por favor digite outro número')
    }

    next()
}

module.exports = { validarRequerimento };