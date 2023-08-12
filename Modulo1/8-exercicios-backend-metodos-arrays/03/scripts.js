const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia']
const posicao = 3

function grupoDeCarros(array, numero) {
    const grupo = array.slice(numero, numero + 3)
    return grupo.join(" - ")
}

console.log(grupoDeCarros(nomes, posicao))