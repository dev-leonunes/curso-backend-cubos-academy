const yup = require('yup');
const { pt } = require('yup-locales')
yup.setLocale(pt)

const registerSchema = yup.object({
    nome: yup.string().required(),
    email: yup.string().email().required()
});

module.exports = registerSchema;