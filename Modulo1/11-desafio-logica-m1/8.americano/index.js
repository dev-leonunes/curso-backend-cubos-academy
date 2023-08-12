function solucao(numeros) {
    const s = numeros.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual
    })
    let contador = 1
    for (let i = 1; i < s; i++) {
        contador++
        if (contador > numeros.length) {
            contador = 1
        }
    }
    console.log(contador)
}