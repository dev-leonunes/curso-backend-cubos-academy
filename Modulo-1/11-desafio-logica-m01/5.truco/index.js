function solucao(carta) {
    let cartaVirada = ["Q", "J", "K", "A", "2", "3"]
    let manilha = cartaVirada.indexOf(carta) + 1

    if (manilha > 5) {
        console.log(cartaVirada[0])
    } else {
        console.log(cartaVirada[manilha])
    }
}