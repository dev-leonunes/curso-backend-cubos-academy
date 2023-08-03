const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const arrayDeFrutas = frutas.map((fruta, index) => {
    const primeiraLetra = fruta[0].toUpperCase()
    const resto = fruta.slice(1).toLowerCase()
    return `${index} - ${primeiraLetra + resto}`
})


console.log(arrayDeFrutas)