const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (possuiPatologia || idade > 65 || idade < 12 || altura < 150) {
    console.log('ACESSO NEGADO')
} else if (idade < 18 || ehEstudante) {
    console.log('10 reais')
} else {
    console.log('20 reais')
}