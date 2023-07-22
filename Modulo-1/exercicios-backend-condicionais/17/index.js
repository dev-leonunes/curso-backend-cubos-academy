//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorPago === valorDoProduto / 100 || valorPago > valorDoProduto / 100) {
    console.log('Não restam parcelas, pagamento concluido.')
} else {
    const valorRestante = valorDoProduto / 100 - valorPago
    const parcelasRestantes = quantidadeDoParcelamento - Math.floor(valorPago / ((valorDoProduto / 100) / quantidadeDoParcelamento));
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorRestante / parcelasRestantes}`);
}