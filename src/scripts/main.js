

/*############################################

function convertCurrency() {
  let amount = parseFloat(document.getElementById('amount').value);
  let fromCurrency = document.getElementById('fromCurrency').value;
  let toCurrency = document.getElementById('toCurrency').value;

  // Implemente a lógica de conversão aqui

  let result = amount * conversionRate; // Substitua conversionRate pelo valor correto

  document.getElementById('result').textContent = `${amount} ${fromCurrency} equivalem a ${result} ${toCurrency}`;
}
 
*/




// Atualização do ano no rodapé
function currentYear(){
  const year = new Date().getFullYear();
  const currentYear = document.querySelector("#anoAtual");
  currentYear.textContent = year;
}currentYear();