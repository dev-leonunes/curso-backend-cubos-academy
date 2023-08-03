const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const verificadorPalavras = (arrayDePalavras) => {
    const resultado = arrayDePalavras.filter((palavra) => {
        return palavra.length < 9
    })
    return resultado.join(", ")
}

console.log(verificadorPalavras(cidades))