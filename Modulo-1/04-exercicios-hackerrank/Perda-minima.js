let precos = [30, 10, 54, 76, 1, 4, 35];
let diferenca = Infinity;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        if (precos[j] < precos[i]) {
            let perda = precos[i] - precos[j];
            if (perda < diferenca) {
                diferenca = perda;
            }
        }
    }
}

console.log(diferenca)