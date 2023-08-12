const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 40 },
    { nome: 'Pedro', idade: 22 },
    { nome: 'Laura', idade: 18 }
];

const maioresDeIdade = (array => {
    const resultado = array.every((pessoa) => {
        return pessoa.idade >= 18
    })
    console.log(resultado ? "Festa Liberada!" : "Possui menor de idade")
})

maioresDeIdade(pessoas)