//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let desconto

if (tipoDePagamento === "credito") {
    desconto = 0.05
} else if (tipoDePagamento === "cheque") {
    desconto = 0.03
} else {
    desconto = 0.10
}

let valorFinal = valorDoProduto - (valorDoProduto * desconto)
valorFinal /= 100
console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)