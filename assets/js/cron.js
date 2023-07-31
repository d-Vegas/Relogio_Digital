var hh = 0;
var mm = 0;
var ss = 0;
var tempo = 1000;
var cron;

function start() {
    if (!cron) {
        cron = setInterval(() => {
            timer();
        }, tempo);
    }
}

function pause() {
    clearInterval(cron);
    cron = null;
}

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("counter").innerText = "00:00:00";
    cron = null;
}

function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }

    var format =
        (hh < 10 ? "0" + hh : hh) +
        ":" +
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss);

    document.getElementById("counter").innerText = format;
}

const saudacaoElement = document.getElementById("saudacao");

const dataAtual = new Date();
let saudacao = "";
let hora = dataAtual.getHours();

switch (true) {
  case hora >= 5 && hora < 12:
    saudacao = "Bom Dia";
    break;
  case hora >= 12 && hora < 18:
    saudacao = "Boa Tarde";
    break;
  default:
    saudacao = "Boa Noite";
}
saudacaoElement.innerHTML = saudacao;
