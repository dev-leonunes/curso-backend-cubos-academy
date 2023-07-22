const caractere = "E";
const vogais = ['a', 'e', 'i', 'o', 'u'];
const vogaisMaiusculas = ['A', 'E', 'I', 'O', 'U'];
const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z',
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

if (!isNaN(caractere)) {
    console.log('número');
} else if (vogais.indexOf(caractere) !== -1) {
    console.log('vogal minúscula');
} else if (vogaisMaiusculas.indexOf(caractere) !== -1) {
    console.log('vogal maiúscula');
} else if (consoantes.indexOf(caractere) !== -1) {
    console.log('consoante');
} else {
    console.log('outro caractere que não é uma letra nem um número');
}