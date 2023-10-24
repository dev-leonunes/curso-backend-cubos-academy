const joi = require('joi');

const schemaUsers = joi.object({
    nome: joi.string().min(3).required(),
    email: joi.string().email().required(),
    senha: joi.string().min(4).required()
});

module.exports = schemaUsers;