const { json } = require("express");

const validarSenha = (req, res, next) => {
    const { senha } = req.query

    if (!senha) {
        return res.status(401).json({ mensagem: 'Por favor informe a senha.' })
    }

    if (senha != "cubos123") {
        return res.status(401).json({ mensagem: 'Senha incorreta, tente novamente.' })
    }

    next()
}

module.exports = validarSenha;