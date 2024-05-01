const nomeArquivo = 'Foto da Familia.pdf';

function validacaoArquivo(arquivo) {
    if (arquivo.includes(".jpg") || arquivo.includes(".jpeg") || arquivo.includes(".gif") || arquivo.includes(".png")) {
        return "Arquivo válido"
    } else {
        return "Arquivo inválido"
    }
}

console.log(validacaoArquivo(nomeArquivo))