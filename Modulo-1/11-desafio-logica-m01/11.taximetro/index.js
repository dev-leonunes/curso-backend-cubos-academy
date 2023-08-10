function solucao(min, km) {
    let valor = 0
    if (min <= 20) {
        valor += min * 50
    } else {
        valor += (20 * 50) + ((min - 20) * 30)
    }

    if (km <= 10) {
        valor += km * 70
    } else {
        valor += (10 * 70) + ((km - 10) * 50)
    }

    console.log(Math.floor(valor))
}