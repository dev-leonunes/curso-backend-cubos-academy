const joi = require('joi');

const schemaAuth = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(4).required()
});

module.exports = schemaAuth;