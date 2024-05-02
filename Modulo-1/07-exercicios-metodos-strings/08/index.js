const cpf = "011.022.033-44"

let cpfModificado = cpf.replace(/[/.-]/g, "")

console.log(cpfModificado)