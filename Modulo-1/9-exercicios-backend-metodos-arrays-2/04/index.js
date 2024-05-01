const numeros = [0, 122, 4, 6, 7, 8, 44]

const verificadorPar = (array) => {
    const resultado = array.every((numero) => {
        return numero % 2 === 0
    })
    return resultado ? "array válido" : "array inválido"
}

console.log(verificadorPar(numeros))