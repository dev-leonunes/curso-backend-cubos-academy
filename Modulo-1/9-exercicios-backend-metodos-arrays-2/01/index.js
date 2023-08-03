const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const resultado = (arrayDelivros, livro) => {
    const posicao = arrayDelivros.findIndex((livro) => {
        return livro === nomeDoLivro
    })
    return posicao !== -1 ? `O livro está na posição ${posicao + 1}` : `Esse livro não está na biblioteca`
}


console.log(resultado(livros, nomeDoLivro))