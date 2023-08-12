function solucao(texto) {
    const textoFiltrado = texto.trim().split(" ")
    if (textoFiltrado.includes('')) {
        textoFiltrado.splice(textoFiltrado.indexOf(''), 1)
        console.log(textoFiltrado.length)
    } else {
        console.log(textoFiltrado.length)
    }
}