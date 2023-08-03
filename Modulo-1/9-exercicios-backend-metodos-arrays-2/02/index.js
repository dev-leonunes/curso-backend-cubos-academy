const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificadorPalavras = (arrayDePalavras) => {
    const resultado = arrayDePalavras.filter((palavra) => {
        return palavra.length > 6
    })
    return resultado.length === 0 ? "array validado" : "existe palavra inválida"
}

console.log(verificadorPalavras(palavras))