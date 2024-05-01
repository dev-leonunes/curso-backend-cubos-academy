/* Faça uma função que recebe parâmetros do tipo
string e imprimena tela essa string invertida */

const string = "soletrando"


function stringToArray(string) {
    let array = string.split('').reverse()
    return array.join('')
}

console.log(stringToArray(string))