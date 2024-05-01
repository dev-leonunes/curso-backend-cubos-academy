const jogada1 = 5;
const jogada2 = 3;

let jogada = jogada1 + jogada2

if (jogada1 < 0 || jogada2 < 0) {
    console.log('por favor jogue um número válido')
} else if (jogada % 2 === 0) {
    console.log('par')
} else {
    console.log('impar')
}