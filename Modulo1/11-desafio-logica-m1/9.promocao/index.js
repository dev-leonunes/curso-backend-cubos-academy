function solucao(precos) {
    if (precos.length === 2) {
        console.log(precos.reduce((acumulador, item) => {
            return acumulador + item
        }))
    } else {
        let contador = Infinity
        for (let i of precos) {
            if (i < contador) {
                contador = i
            }
        }
        precos.splice(precos.indexOf(contador), 1)
        precos.push(contador * 0.5)
        console.log(precos.reduce((acumulador, item) => {
            return acumulador + item
        }))
    }
}