const express = require('express');
const { registerMails, sendMail } = require('./controllers/mail');

const routes = express();

routes.post('/cadastrar', registerMails);
routes.post('/send-newsletter', sendMail);

module.exports = routes;