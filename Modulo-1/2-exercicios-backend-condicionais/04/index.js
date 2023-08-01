const ladoA = 6;
const ladoB = 3;
const bucha = ladoA === ladoB

if (bucha && ladoA + ladoB === 0) {
    console.log('Bucha de branca')
} else if (bucha && ladoA + ladoB === 2) {
    console.log('Bucha de ás')
} else if (bucha && ladoA + ladoB === 4) {
    console.log('Bucha de duque')
} else if (bucha && ladoA + ladoB === 6) {
    console.log('Bucha de terno')
} else if (bucha && ladoA + ladoB === 8) {
    console.log('Bucha de quadra')
} else if (bucha && ladoA + ladoB === 10) {
    console.log('Bucha de quina')
} else if (bucha && ladoA + ladoB === 12) {
    console.log('Bucha de sena')
} else if (ladoA > 6 || ladoB > 6) {
    console.log('Esse valor não é equivalente a uma peça de dominó')
} else {
    console.log('Não é uma bucha')
}