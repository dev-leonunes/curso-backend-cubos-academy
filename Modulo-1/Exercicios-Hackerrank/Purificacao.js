const stringCorrompida = ""
let dadoPurificado = '*Canis %lupus )familiaris';
for (let i of stringCorrompida) {
    if (i === "!" || i === "@" || i === "#" || i === "$" || i === "%" || i === "&" || i === "*" || i === "(" || i === ")") {
    } else {
        dadoPurificado += i
    }
}
console.log(dadoPurificado)