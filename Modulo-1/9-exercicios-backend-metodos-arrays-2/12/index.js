const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const filtro1 = pessoas.filter((usuario) => {
    return usuario.idade > 20 && usuario.profissao === "Programador"
})

const filtro2 = pessoas.filter((usuario) => {
    return usuario.idade > 30 && usuario.profissao === "Jornalista"
})

const filtro3 = pessoas.filter((usuario) => {
    return usuario.profissao === "Programador" && usuario.idade < 30 || usuario.profissao === "Jornalista" && usuario.idade < 30
})

console.log(filtro1)
console.log(filtro2)
console.log(filtro3)