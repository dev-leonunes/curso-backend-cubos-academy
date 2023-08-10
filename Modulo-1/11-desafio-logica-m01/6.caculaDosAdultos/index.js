function solucao(lista) {
    const maiores = lista.filter((idade) => {
        return idade > 17
    })

    if (maiores.length === 0) {
        console.log("CRESCA E APARECA")
    } else {
        let cacula = Infinity
        maiores.forEach((elemento) => {
            if (elemento < cacula) {
                cacula = elemento
            }
            return cacula
        })
        console.log(cacula)
    }
}
