let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0")

email = email.trim()

let nomes = nome.split(" ")
nome = ""

for (let i of nomes) {
    let letra = i.slice(0, 1)
    let resto = i.slice(1)
    nome += `${letra.toUpperCase()}${resto} `
}

nome = nome.trim()

console.log(identificador)
console.log(email)
console.log(nome.replace(/ /g, "-"))