const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function ondeEstaMeuDono(lista, nomeDoPet) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].pets.includes(nomeDoPet)) {
            return `O(a) dono(a) do(a) ${nomeDoPet} é o(a) ${lista[i].nome}`
        }
    }
    return `Que pena ${nomeDoPet}, não encontramos seu dono(a)`
}

console.log(ondeEstaMeuDono(usuarios, 'Max'))