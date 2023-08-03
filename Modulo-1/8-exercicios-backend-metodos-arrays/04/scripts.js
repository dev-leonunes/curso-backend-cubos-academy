const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function gerenciarFila(fila, tipoDeOperação, nome) {
    if (tipoDeOperação === 'atender') {
        fila.shift()
        return fila.join(", ")
    } else {
        fila.push(nome)
        return fila.join(", ")
    }
}

console.log(gerenciarFila(pacientes, 'agendar', 'Carlos'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'agendar', 'Ricardo'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'agendar', 'Manoela'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'atender'))

console.log(gerenciarFila(pacientes, 'atender'))