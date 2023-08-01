const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


for (let i of filaDeDentro) {
    if (filaDeDentro[4] === undefined) {
        if (filaDeFora.length !== 0) {
            filaDeDentro.push(filaDeFora[0])
            filaDeFora.shift()
        }
    }
}

console.log(filaDeDentro)
console.log(filaDeFora)