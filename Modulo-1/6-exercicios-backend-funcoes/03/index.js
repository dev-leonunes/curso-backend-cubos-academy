const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let quantidade = this.calcularTotalDeItens()
        let total = this.calcularTotalAPagar() / 100
        let desconto = this.calcularDesconto()

        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${quantidade} itens`)
        console.log(`Total a pagar: R$ ${(total).toFixed(2)}`)

        if (desconto > 0) {
            console.log(`Desconto: R$ ${(desconto).toFixed(2)}`)
            total -= desconto
            console.log(`Total com desconto: R$ ${(total).toFixed(2)}`)
        }
    },
    addProduto: function (produto) {
        let produtoNoCarrinho = false
        for (let i of this.produtos) {
            if (i.id === produto.id) {
                produtoNoCarrinho = true
                i.qtd += produto.qtd
                break
            }
        }
        if (!produtoNoCarrinho) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n`)

        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i]
            const total = produto.qtd * produto.precoUnit
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(total / 100).toFixed(2)}`)
        }
    },
    calcularTotalDeItens: function () {
        let quantidade = 0

        for (let produto of this.produtos) {
            quantidade += produto.qtd
        }

        return quantidade
    },
    calcularTotalAPagar: function () {
        let total = 0

        for (let produto of this.produtos) {
            total += produto.qtd * produto.precoUnit
        }

        return total
    },
    calcularDesconto: function () {
        let desconto = 0
        let opcaoDeDesconto1 = 0
        let opcaoDeDesconto2 = 0
        const quantidade = this.calcularTotalDeItens()
        const total = this.calcularTotalAPagar()
        if (quantidade > 4) {
            let menorPreco = Infinity
            for (let produto of this.produtos) {
                if (produto.precoUnit < menorPreco) {
                    menorPreco = produto.precoUnit
                }
            }
            opcaoDeDesconto1 = menorPreco
        }

        if (total > 10000) {
            opcaoDeDesconto2 = total * 0.10
        }

        if (opcaoDeDesconto1 > opcaoDeDesconto2) {
            desconto = opcaoDeDesconto1 / 100
        } else {
            desconto = opcaoDeDesconto2 / 100
        }

        return desconto
    }
}

console.log(`R$ ${(carrinho.calcularDesconto()).toFixed(2)}`)

console.log("----------------------------")

carrinho.imprimirDetalhes()

console.log("----------------------------")

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda)

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis)
carrinho.imprimirResumo()

console.log("----------------------------")

console.log(`R$ ${(carrinho.calcularDesconto()).toFixed(2)}`)