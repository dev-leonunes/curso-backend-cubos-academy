const numeroCartao = '1111222233334444';

const primeirosDig = numeroCartao.slice(0, 4)
const ultimosDig = numeroCartao.slice(12)

let numeroEscondido = primeirosDig + ultimosDig.padStart(12, "*")

console.log(numeroEscondido)