
// Atualização do ano no rodapé
function currentYear(){
  const year = new Date().getFullYear();
  const currentYear = document.querySelector("#anoAtual");
  currentYear.textContent = year;
}currentYear();