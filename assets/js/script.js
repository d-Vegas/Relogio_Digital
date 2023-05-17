const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const periodo = setInterval(function(){
    let datePeriod = new Date();
    let day = datePeriod.getDate();
    let month = datePeriod.getMonth() + 1;
    let year = datePeriod.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
  
    dia.textContent = day;
    mes.textContent = month;
    ano.textContent = year;

});

const saudacaoElement = document.getElementById("saudacao");

const dataAtual = new Date();
let saudacao = "";
let hora = dataAtual.getHours();

if (hora >= 5 && hora < 12) {
  saudacao = "BOM DIA";
} else if (hora >= 12 && hora < 18) {
  saudacao = "BOA TARDE";
} else {
  saudacao = "BOA NOITE";
}

saudacaoElement.innerHTML = saudacao;
