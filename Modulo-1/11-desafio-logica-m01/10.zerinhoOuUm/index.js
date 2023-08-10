function solucao(jogadores) {
    let jogada0 = []
    let jogada1 = []
    for (let jogador of jogadores) {
        if (jogador.jogada === 0) {
            jogada0.push(jogador)
        } else {
            jogada1.push(jogador)
        }
    }

    if (jogada0.length === 1) {
        console.log(jogada0[0].nome)
    } else if (jogada1.length === 1) {
        console.log(jogada1[0].nome)
    } else {
        console.log("NINGUEM")
    }
}