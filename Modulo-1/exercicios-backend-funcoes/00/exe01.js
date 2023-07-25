function faixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem"
    } else if (idade <= 65) {
        return "adulto(a)"
    } else {
        return "idoso(a)"
    }
}

console.log(faixaEtaria(28))