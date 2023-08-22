const express = require('express');

const app = express();

let hora = 0;
let minuto = 0;
let segundo = 0;
let cronometro = false;
let hr, min, sec;

function timer() {
    setInterval(() => {
        if (cronometro) {
            segundo++;

            if (segundo == 60) {
                segundo = 0;
                minuto++;

                if (minuto == 60) {
                    minuto = 0;
                    hora++;
                }
            }
        }
    }, 1000);
}

function formatarTempo() {
    if (hora > 0 && hora < 10) {
        hr = hora.toString().padStart(2, '0');
    } else {
        hr = hora.toString;
    }

    if (minuto < 10) {
        min = minuto.toString().padStart(2, '0');
    } else {
        min = minuto.toString();
    }

    if (segundo < 10) {
        sec = segundo.toString().padStart(2, '0');
    } else {
        sec = segundo.toString();
    }

    if (hora > 0) {
        return `${hr} horas, ${min} minutos, ${sec} segundos`;
    } else {
        return `${min} minutos, ${sec} segundos`;
    }
}



app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${formatarTempo()}`);
});

app.get('/iniciar', (req, res) => {
    cronometro = true;
    timer();
    res.send('Cronômetro iniciado!');
});

app.get('/pausar', (req, res) => {
    cronometro = false;
    res.send('Cronômetro pausado!');
});

app.get('/continuar', (req, res) => {
    if (!cronometro) {
        cronometro = true;
        res.send('Cronômetro continuando!');
    }
});

app.get('/zerar', (req, res) => {
    hora = 0;
    minuto = 0;
    segundo = 0;
    res.send('Cronômetro zerado!');
});

app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000');
});