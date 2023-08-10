function processData(input) {
    const novoInput = input.trim().split("\n")
    const colegas = Number(novoInput[0])
    novoInput.shift()
    const elementos = []

    for (let i = 0; i < novoInput.length; i++) {
        const pontos = novoInput[i].split(" ")
        elementos.push({
            x: Number(pontos[0]),
            y: Number(pontos[1])
        })
    }

    let distanciaMaxima = 0

    for (let i = 0; i < colegas; i++) {
        for (let j = i + 1; j < colegas; j++) {
            console.log(elementos[i].x)
            const distancia = Math.sqrt(
                Math.pow(elementos[i].x - elementos[j].x, 2) +
                Math.pow(elementos[i].y - elementos[j].y, 2)
            )
            if (distancia > distanciaMaxima) {
                distanciaMaxima = distancia
            }
        }
    }

    console.log(distanciaMaxima % 1 === 0 ? `${distanciaMaxima}.0` : distanciaMaxima)
}