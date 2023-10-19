const knex = require('../config/connection');
const registerSchema = require('../middleware/validator');
const send = require('../services/nodemailer');
const compilerHtml = require('../utils/compilerHtml');

const registerMails = async (req, res) => {
    const { nome, email } = req.body;
    try {
        const newRecord = {
            nome,
            email
        };

        await registerSchema.validate(newRecord);

        const record = await knex('emails').where({ email }).first();

        if (record) {
            return res.status(400).json('O e-mail informado já está cadastrado');
        }

        await knex('emails').insert(newRecord);

        const welcome = {
            to: email,
            subject: `Seu Cadastro Foi Um Sucesso, ${nome}!`,
            body: `
            Bem-vindo à nossa comunidade!

            É com grande satisfação que anunciamos que seu e-mail foi cadastrado com sucesso, ${nome}!
            A partir deste momento, você faz parte da nossa valiosa newsletter.
            Agradecemos imensamente por se inscrever!`
        }

        send(welcome.to, welcome.subject, welcome.body);

        return res.status(200).json('Email cadastrado com sucesso!');
    } catch (error) {
        return res.status(500).json(error.message)
    }
}


const sendMail = async (req, res) => {
    const { title, date, newsletterBody } = req.body;

    try {
        const user = await knex('emails');

        for (let i = 0; i < user.length; i++) {
            const html = await compilerHtml('./src/templates/newsletter.html', {
                title,
                date,
                nome: user[i].nome,
                newsletterBody
            });

            const { to, subject, body } = {
                to: user[i].email,
                subject: title,
                body: html
            }

            send(to, subject, body);
        }

        return res.json('Newsletter enviada com sucesso!');
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    registerMails,
    sendMail
}