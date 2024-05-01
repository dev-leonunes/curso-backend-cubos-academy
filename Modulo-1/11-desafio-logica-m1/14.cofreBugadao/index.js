function processData(input) {
    const senhas = input.trim().split("\n").map((palavra) => palavra.split(""))

    const senhaCorreta = senhas[0].filter((palavra) => {
        return palavra.trim().length > 0
    })
    const palavraDigitada = senhas[1].filter((palavra) => {
        return palavra.trim().length > 0
    })

    let verificador = 0
    for (let letra of palavraDigitada) {
        if (letra === senhaCorreta[verificador]) {
            verificador++
        }
    }

    if (verificador === senhaCorreta.length) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
}