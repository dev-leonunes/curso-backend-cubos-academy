const email = "aluno@cubos.academy";

function validarEmail(email) {
    if (email.includes("@") && email.includes(".") && email[0] != "." && email[email.length - 1] != ".") {
        return "E-mail válido"
    } else {
        return "E-mail inválido"
    }
}

console.log(validarEmail(email)) //válido
console.log(validarEmail("jose@cubos.academy")) //válido
console.log(validarEmail("jose@cubos.academy.br")) //válido
console.log(validarEmail("jose.messias@cubos.academy")) //válido
console.log(validarEmail("jose.messias@cubos.io")) //válido
console.log(validarEmail("jose@cubos")) //inválido
console.log(validarEmail("jose.messias@cubos")) //válido
console.log(validarEmail("jose.messias@.")) //inválido
console.log(validarEmail("jose.@cubos")) //válido
console.log(validarEmail(".@")) //inválido
console.log(validarEmail("@.")) //inválido
console.log(validarEmail("jose.messias@cubos.")) //inválido
console.log(validarEmail(".messias@cubos.")) //inválido
console.log(validarEmail(".messias@cubos")) //inválido