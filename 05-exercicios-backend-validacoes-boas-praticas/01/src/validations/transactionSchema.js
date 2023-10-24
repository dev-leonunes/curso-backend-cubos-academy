const joi = require('joi');

const schemaTransactions = joi.object({
    descricao: joi.string().required(),
    valor: joi.number().required(),
    data: joi.string().required(),
    categoria_id: joi.number().required(),
    tipo: joi.custom(value => {
        if (value !== 'entrada' && value !== 'saida') {
            throw new Error('Tipo deve ser "entrada" ou "saida"');
        }
        return true;
    }).required()
});

module.exports = schemaTransactions;