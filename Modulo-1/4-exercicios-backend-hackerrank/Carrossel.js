let sequencia = ">>><>"

let contador = 0

for (let i of sequencia) {
    if (i === ">") {
        contador++
    } else {
        contador--
    }

    if (contador > 6) {
        contador = 0
    }

    if (contador < 0) {
        contador = 6
    }
}

console.log(contador)