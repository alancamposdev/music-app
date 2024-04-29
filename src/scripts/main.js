// Script principal da aplicação

let musica = document.querySelector("#musica");
let btnPlay = document.querySelector("#play");
let btnPause = document.querySelector("#pause");

btnPlay.addEventListener("click", tocarMusica);
btnPause.addEventListener("click", pausarMusica);
musica.addEventListener("timeupdate", atualizarBarra);

function tocarMusica() {
  musica.play();
  btnPlay.style.display = "none";
  btnPause.style.display = "block";
}

function pausarMusica() {
  musica.pause();
  btnPlay.style.display = "block";
  btnPause.style.display = "none";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  let ponto = document.querySelector(".ponto");
  let duracao = musica.duration;
  let atual = musica.currentTime;

  barra.style.width = Math.floor((atual / duracao) * 100) + "%";
  ponto.style.left = Math.floor((atual / duracao) * 100) + "%";

  // adiciona a duração total da música na tela
  let duracaoTotal = document.querySelector(".fim");
  let minutos = Math.floor(duracao / 60);
  let segundos = Math.floor(duracao % 60);
  duracaoTotal.textContent = minutos + ":" + segundos;

  // adiciona o tempo atual da música na tela
  let tempoAtual = document.querySelector(".inicio");
  let minutosAtual = Math.floor(atual / 60);
  let segundosAtual = Math.floor(atual % 60);
  tempoAtual.textContent = minutosAtual + ":" + segundosAtual;
}

/*###########################################################*/
// Script do rodapé da página - Ano atual
function currentYear() {
  const year = new Date().getFullYear();
  const currentYear = document.querySelector("#anoAtual");
  currentYear.textContent = year;
}
currentYear();
