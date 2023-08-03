const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva']

const frutasInvertidas = Array.from(frutas).reverse()

console.log(frutasInvertidas.join(", "))

frutas.shift()
frutas.splice(frutas.length - 1, 1, 'Melão')

console.log(frutas)