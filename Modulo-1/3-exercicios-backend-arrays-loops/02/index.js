const letras = ["A", "a", "B", "C", "E", "e"];

let encontrado = 0

for (let letra of letras) {
    if (letra === 'E' || letra === 'e') {
        encontrado++
    }
}

if (encontrado === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
} else {
    console.log(`Foram encontradas ${encontrado} letras "E" ou "e".`)
}