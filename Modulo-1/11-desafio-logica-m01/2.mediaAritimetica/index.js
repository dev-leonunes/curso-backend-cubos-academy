function solucao(lista) {
    if (lista.length === 0) {
        console.log(0)
        return
    }

    if (lista.length > 1000) {
        return
    }

    let res = lista.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual
    })

    let media = res / lista.length
    console.log(media)
}