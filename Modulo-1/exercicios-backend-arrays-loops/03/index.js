const numeros = [54, 22, 14, 87, 10, 284];

let n = 10;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(numeros.indexOf(n))
        break
    }
}