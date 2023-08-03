const celular = 7199918888

function formatarCelular(numero) {
    const strCelular = String(numero)
    let celularFormatado = 'Esse número de celular é inválido'

    if (strCelular.length === 8) {
        celularFormatado = `9 ${strCelular.slice(0, 4)}-${strCelular.slice(4)}`
    } else if (strCelular.length === 9) {
        if (strCelular.startsWith('9')) {
            celularFormatado = `9 ${strCelular.slice(1, 5)}-${strCelular.slice(5)}`
        } else {
            celularFormatado = 'Esse número de celular é inválido'
        }
    } else if (strCelular.length === 10) {
        celularFormatado = `(${strCelular.slice(0, 2)}) 9 ${strCelular.slice(2, 6)}-${strCelular.slice(6)}`
    } else if (strCelular.length === 11) {
        celularFormatado = `(${strCelular.slice(0, 2)}) 9 ${strCelular.slice(3, 7)}-${strCelular.slice(7)}`
    }

    return celularFormatado
}

console.log(formatarCelular(celular))