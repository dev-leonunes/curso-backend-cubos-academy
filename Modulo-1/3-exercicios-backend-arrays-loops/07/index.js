const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let começaEmA = []

for (let nome of nomes) {
    if (nome[0] === 'a' || nome[0] === 'A') {
        começaEmA.push(nome)
    }
}

console.log(começaEmA)