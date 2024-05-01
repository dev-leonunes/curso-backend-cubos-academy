let disparos = [0, 50, 90, 80, 100, 80, 40];

let contador = 0

for (let i of disparos) {
    if (i > 70) {
        contador++
    }
}

if (contador >= 3) {
    console.log(contador)
} else {
    console.log("ELIMINADO")
}