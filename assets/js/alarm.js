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
