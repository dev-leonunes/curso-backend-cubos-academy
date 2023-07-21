let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menor = Infinity
let maior = 0
let totalDasNotas = 0
let contador = -2

for (let i of notas) {
    if (i < menor) {
        menor = i
    }

    if (i > maior) {
        maior = i
    }

    totalDasNotas += i
    contador++
}

console.log((totalDasNotas - (menor + maior)) / contador)