let capital = 10000
let juros = (((13.65 / 100) * 110) / 12) / 100
let tempo = 24
let montante = capital * (1 + juros) ** tempo

console.log(montante)
