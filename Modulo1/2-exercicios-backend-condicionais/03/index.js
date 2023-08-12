const ladoA = 3;
const ladoB = 3;

if (ladoA === ladoB && ladoA <= 6 && ladoB <= 6) {
    console.log('SIM')
} else if (ladoA != ladoB && ladoA <= 6 && ladoB <= 6) {
    console.log('NÃO')
} else {
    console.log('NÃO É UMA PEÇA DE DOMINÓ')
}