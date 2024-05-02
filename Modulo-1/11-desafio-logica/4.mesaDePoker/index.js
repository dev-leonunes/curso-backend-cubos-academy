function solucao(min, max, valores) {
    let valoresAutorizados = []
    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            valoresAutorizados.push(valor)
        }
    }
    console.log(valoresAutorizados)
}