//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const pagamentoMensal = (rendaMensalEmCentavos / 10000) * 18

if (rendaMensalEmCentavos / 100 >= 2000) {
    if (mesesDecorridos <= 60 && totalJaPagoPeloAluno / 100 < 18000 && pagamentoMensal < 18000 - totalJaPagoPeloAluno / 100) {
        console.log(`O valor da parcela desse mês é R$ ${pagamentoMensal} reais`)
    } else if (mesesDecorridos <= 60 && totalJaPagoPeloAluno / 100 < 18000 && pagamentoMensal > (18000 - totalJaPagoPeloAluno)) {
        console.log(`O valor da parcela desse mês é R$ ${18000 - totalJaPagoPeloAluno / 100} reais, pois o total ja pago pelo aluno é de R$ ${totalJaPagoPeloAluno / 100} reais.`)
    } else if (mesesDecorridos > 60) {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois já se passaram ${mesesDecorridos} meses.`)
    } else {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o total já pago pelo aluno é de R$ ${totalJaPagoPeloAluno / 100} reais.`)
    }
} else {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
}
