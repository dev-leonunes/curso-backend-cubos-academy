/* Faça uma função que, dado um determinado conjunto de dados, descarte os
primeiros e os últimos 10% dados, aproveitando apenas os 80% centrais */

const arrayAleatorio = [63, 22, 85, 47, 11, 89, 1, 6, 29, 55, 72, 95, 16, 3, 80,
    36, 50, 99, 40, 780, 92, 59, 83, 36, 15, 88, 24, 3];

function filtrarDados(dados) {
    const numeroDeElementos = Math.round(dados.length * 0.1)
    const arrayFiltrado = dados.slice(numeroDeElementos, (dados.length - numeroDeElementos))
    return arrayFiltrado
}

console.log(filtrarDados(arrayAleatorio))