//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2.5;

let risco

if (quantidadeDeAguaIngerida < 1.5) {
    risco = "Risco Alto - Você está ingerindo pouquissima água, beba mais água!"
} else if (quantidadeDeAguaIngerida < 3) {
    risco = "Risco Moderado - Você está ingerindo pouca água, beba mais!"
} else {
    risco = "Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!"
}

console.log(risco)