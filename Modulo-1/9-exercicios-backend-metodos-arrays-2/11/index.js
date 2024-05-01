const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtroLetraInicial = nomes.filter((nome) => {
    let letraInicial = nome.charAt(0) === "a" || nome.charAt(0) === "A"
    return letraInicial
})

console.log(filtroLetraInicial)