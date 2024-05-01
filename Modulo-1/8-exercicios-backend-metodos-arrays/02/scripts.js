const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego']
const tamanhoDoGrupo = 4

function divisaoDeArray(array, numero) {
    let numeroDoGrupo = 1
    for (let i = 0; i < array.length; i += numero) {
        const grupo = array.slice(i, i + numero)
        console.log(`Grupo ${numeroDoGrupo}: ${grupo.join(", ")}.`)
        numeroDoGrupo++
    }
}

divisaoDeArray(nomes, tamanhoDoGrupo)