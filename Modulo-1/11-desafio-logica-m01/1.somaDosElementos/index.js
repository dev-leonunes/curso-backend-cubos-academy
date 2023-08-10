function solucao(lista) {
    let res = lista.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual
    })

    console.log(res)
}