const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const verificadorLista = (array) => {
    const resultado = array.some((palavra) => {
        return palavra === "cerveja" || palavra === "vodka"
    })

    return resultado ? "revise sua lista, joão. possui bebida com venda proibida!" : "tudo certo, vamos as compras!"
}

console.log(verificadorLista(palavras))