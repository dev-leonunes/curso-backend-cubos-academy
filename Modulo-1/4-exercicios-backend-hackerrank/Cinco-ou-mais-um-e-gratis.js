let precos = [100, 500, 100, 200, 50]
let menorPreço = Infinity
let valorDaCompra = 0

for (let i of precos) {
    if (precos.length > 4) {
        if (i < menorPreço) {
            menorPreço = i
        }
    }
    valorDaCompra += i
}
if (precos.length > 4) {
    console.log(valorDaCompra - menorPreço)
} else {
    console.log(valorDaCompra)
}