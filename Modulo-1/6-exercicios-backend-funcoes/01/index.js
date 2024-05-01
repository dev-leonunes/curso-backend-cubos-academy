const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    // passar pelo objeto pegar o nome, quantidade de acertos e definir uma nota para o aluno
    let nome = prova.aluno
    let contador = 0
    for (let i of prova.questoes) {
        if (i.resposta === i.correta) {
            contador++
        }
    }
    nota = contador * 2
    // imprimir isso na tela com a seguinte mensagem:
    //O aluno(a) João acertou 3 questões e obteve nota 6
    console.log(`O aluno(a) ${nome} acertou ${contador} e obteve nota ${nota}`)
}

corrigirProva(prova)