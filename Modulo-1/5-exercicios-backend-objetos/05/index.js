const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const aula01 = {
    identificador: 1,
    nome_da_aula: "Introdução a programação"
}

const aula02 = {
    identificador: 2,
    nome_da_aula: "Variáveis"
}

const aula03 = {
    identificador: 3,
    nome_da_aula: "Condicionais"
}

const aula04 = {
    identificador: 4,
    nome_da_aula: "Arrays"
}

curso.aulas = [aula01, aula02, aula03, aula04]

console.log(curso)