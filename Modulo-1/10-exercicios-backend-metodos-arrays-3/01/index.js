const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

numeros.sort((a, b) => {
    return a - b
})

console.log(numeros)

console.log("------------------------------------------")

numeros.sort((a, b) => {
    return b - a
})

console.log(numeros)

console.log("------------------------------------------")

console.log(numeros.sort())

console.log("-----------------------------------------------")

frutas.sort((a, b) => {
    return a.localeCompare(b)
})

console.log(frutas)

console.log("-----------------------------------------------")

frutas.sort((a, b) => {
    return b.localeCompare(a)
})

console.log(frutas)

console.log("-----------------------------------------------")

frutas.sort((a, b) => {
    return a.length - b.length
})

console.log(frutas)