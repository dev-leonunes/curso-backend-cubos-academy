const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let resposta = []

for (let i of original) {
    if (i >= 10 && i <= 20 || i > 100) {
        resposta.push(i)
    }
}

console.log(resposta)