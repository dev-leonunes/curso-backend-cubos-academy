let resultados = [
    "V",
    "E",
    "V",
    "E"
];

let pontos = 0;

for (let i of resultados) {
    if (i === "V") {
        pontos += 3
    } else if (i === "E") {
        pontos++
    }
}

console.log(pontos)