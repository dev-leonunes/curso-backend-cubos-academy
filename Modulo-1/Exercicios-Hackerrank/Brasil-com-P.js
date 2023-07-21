let primeiraLetra = "a";
let segundaLetra = "v";
let palavras = [
    "aveia",
    "manha",
    "ave"
];

let palavrasAceitas = []

for (let palavra of palavras) {
    let letra1 = palavra[0]
    let letra2 = palavra[1]
    if (letra1 === primeiraLetra && letra2 === segundaLetra) {
        palavrasAceitas.push(palavra)
    }
}

if (palavrasAceitas.length > 0) {
    for (let palavraAceita of palavrasAceitas) {
        console.log(palavraAceita)
    }
} else {
    console.log('NENHUMA')
}
