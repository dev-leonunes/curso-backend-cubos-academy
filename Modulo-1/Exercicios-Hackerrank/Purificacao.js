const stringCorrompida = "*Canis %lupus )familiaris"
let dadoPurificado = '';
for (let i of stringCorrompida) {
    if (i === "!" || i === "@" || i === "#" || i === "$" || i === "%" || i === "&" || i === "*" || i === "(" || i === ")") {
    } else {
        dadoPurificado += i
    }
}
console.log(dadoPurificado)