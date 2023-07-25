function apresentacao(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
}

const pessoa = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante",
}

apresentacao(pessoa)