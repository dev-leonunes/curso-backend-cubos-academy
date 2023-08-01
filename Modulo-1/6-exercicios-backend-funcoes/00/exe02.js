function faixaEtaria(idade) {
    if (idade < 25) {
        return "jovem"
    } else if (idade < 65) {
        return "adulto(a)"
    } else {
        return "idoso(a)"
    }
}

function apresentacao(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos e sou ${pessoa.profissao}!`)
}

const pessoa1 = {
    nome: "Léo",
    idade: 28,
    profissao: "Dev. Back-end"
}

apresentacao(pessoa1)

const pessoa2 = {
    nome: "Isa",
    idade: 27,
    profissao: "Social Media"
}

apresentacao(pessoa2)

const pessoa3 = {
    nome: "Gabi",
    idade: 24,
    profissao: "Estudante"
}

apresentacao(pessoa3)