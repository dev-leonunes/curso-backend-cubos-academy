const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(fila, nome) {
    fila.push(nome)
    console.log(fila.join(", "))
}

function atenderPaciente(fila) {
    fila.shift()
    console.log(fila.join(", "))
}

function cancelarAtendimento(fila, nome) {
    const posicao = fila.indexOf(nome)
    fila.splice(posicao, 1)
    console.log(fila.join(", "))
}

atenderPaciente(pacientes)

agendarPaciente(pacientes, 'Carlos')

agendarPaciente(pacientes, 'Rafael')

cancelarAtendimento(pacientes, 'Maria')

atenderPaciente(pacientes)