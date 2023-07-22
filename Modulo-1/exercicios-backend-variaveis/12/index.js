let capitalInicial = 60000
let meses = 24
let montante = 90000
let taxaDeJuros = (montante / capitalInicial) ** (1 / meses) - 1

taxaDeJuros *= 100

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(3)}%, pois após ${meses} meses você teve que pagar ${montante} reais`)