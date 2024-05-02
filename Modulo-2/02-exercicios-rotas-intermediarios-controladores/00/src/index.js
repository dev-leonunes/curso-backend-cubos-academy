const express = require('express')
const { filtrarProfesores, encontrarProfessor } = require('./controladores/professores')

const app = express()

app.get('/professores', filtrarProfesores)

app.get('/professores/:id', encontrarProfessor)

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
})