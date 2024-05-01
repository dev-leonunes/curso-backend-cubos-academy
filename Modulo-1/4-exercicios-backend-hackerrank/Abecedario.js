let letra = "m";
let palavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja",
];

let contador = 0

for (let palavra of palavras) {
    let primeiraLetra = palavra[0];
    if (primeiraLetra !== letra) {
        contador++
    }
}

console.log(contador)