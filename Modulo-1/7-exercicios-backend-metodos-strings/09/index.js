const nome = 'Guido Cerqueira';

function geradorDeNickname(nome) {
    return "@" + removedorDeAcento(nome).toLowerCase().replaceAll(" ", "").slice(0, 12)
}

function removedorDeAcento(nome) {
    return nome.replace(/[áàãâä]/, 'a').replace(/[éèêë]/, 'e').replace(/[íìîï]/, 'i').replace(/[óòõôö]/, 'o').replace(/[úùûü]/, 'u').replace(/[ç]/, 'c')
}

console.log(geradorDeNickname(nome))