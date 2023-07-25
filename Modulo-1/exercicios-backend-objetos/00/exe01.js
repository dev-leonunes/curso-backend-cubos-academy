let produtosConsumidos = [
    {
        nome: "Espresso",
        preço: 890,
        quantidade: 2
    },
    {
        nome: "Pão de Queijo",
        preço: 690,
        quantidade: 4
    },
    {
        nome: "Cookie",
        preço: 990,
        quantidade: 2
    }
]

const cliente = {
    nome: "José",
    idade: 30,
    produtosConsumidos
}

console.log(`O Sr(a). ${cliente.nome} consumiu ${produtosConsumidos[0].quantidade} ${produtosConsumidos[0].nome}, ${produtosConsumidos[1].quantidade} ${produtosConsumidos[1].nome}, ${produtosConsumidos[2].quantidade} ${produtosConsumidos[2].nome}`)
let total = 0
for (let produto of produtosConsumidos) {
    total += produto.preço * produto.quantidade
}
console.log(`O valor total da conta é de R$ ${(total / 100).toFixed(2)}`)