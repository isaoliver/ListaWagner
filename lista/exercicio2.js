// Pede ao usuário um número inteiro de 1 a 10
var numero = prompt("Digite um número inteiro de 1 a 10:");

// Converte a string digitada em um número inteiro
numero = parseInt(numero);

// Verifica se o número está dentro do intervalo esperado
if (numero >= 1 && numero <= 10) {
  // Define o título inicial
  document.write("<h2>Tabuada do " + numero + ":</h2>");
  
  // Loop pelos números de 1 a 10 e calcula o resultado da multiplicação
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    
    // Exibe o resultado na janela do navegador, linha a linha
    document.write("<p>" + numero + " x " + i + " = " + resultado + "</p>");
  }
} else {
  // Se o número não estiver no intervalo esperado, exibe uma mensagem de erro
  alert("O número digitado deve ser um inteiro de 1 a 10.");
}
