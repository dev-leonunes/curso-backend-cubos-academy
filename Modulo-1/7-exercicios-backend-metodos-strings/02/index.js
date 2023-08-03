const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length != 11) {
    console.log("CPF Inválido")
} else {
    console.log(modeladorDeCpf(cpf))
}

if (cnpj.length != 14) {
    console.log("CNPJ Inválido")
} else {
    console.log(modeladorDeCnpj(cnpj))
}

function modeladorDeCpf(cpf) {
    const part1 = cpf.slice(0, 3)
    const part2 = cpf.slice(3, 6)
    const part3 = cpf.slice(6, 9)
    const part4 = cpf.slice(9)

    return `${part1}.${part2}.${part3}-${part4}`
}

function modeladorDeCnpj(cnpj) {
    const part1 = cnpj.slice(0, 2)
    const part2 = cnpj.slice(2, 5)
    const part3 = cnpj.slice(5, 8)
    const part4 = cnpj.slice(8, 12)
    const part5 = cnpj.slice(12)

    return `${part1}.${part2}.${part3}/${part4}-${part5}`
}