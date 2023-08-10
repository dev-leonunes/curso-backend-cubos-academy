function processData(input) {
    let primeiraLetra = input.slice(0, 1)
    let resto = input.slice(1)

    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase())
    } else if (primeiraLetra === primeiraLetra.toLowerCase() && resto === resto.toUpperCase()) {
        console.log(primeiraLetra.toUpperCase() + resto.toLowerCase());
    } else {
        console.log(input)
    }
}