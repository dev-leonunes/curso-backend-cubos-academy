const endereços = [
    { cep: "00111222", rua: "Rua dos Artistas" },
    { cep: "00111333", rua: "Rua Augusta" },
    { cep: "00222444", rua: "Avenida Paralela" },
    { cep: "11222333", rua: "Rua Carlos Gomes" },
];

const encontrarEndereco = ((enderecos) => {
    const encontrado = enderecos.find((endereco) => {
        return endereco.cep === "00222444"
    })
    return encontrado.rua
})

console.log(encontrarEndereco(endereços))