const palavra = "abracadabra"

let encontrado = 0

for (let letra of palavra) {
    if (letra === 'a') {
        encontrado++
    }
}

if (encontrado === 0) {
    console.log('não tem a')
} else {
    console.log(encontrado)
}