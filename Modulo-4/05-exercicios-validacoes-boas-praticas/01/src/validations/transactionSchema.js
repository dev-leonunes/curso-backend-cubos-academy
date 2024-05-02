const joi = require('joi');

const method = (value, helpers) => {
    if (value !== 'entrada' && value !== 'saida') {
        throw new Error('Tipo deve ser "entrada" ou "saida"');
    }
    return value;
}

const schemaTransactions = joi.object({
    descricao: joi.string().required(),
    valor: joi.number().required(),
    data: joi.string().required(),
    categoria_id: joi.number().required(),
    tipo: joi.string().custom(method, "custom validation").required()
});

module.exports = schemaTransactions;