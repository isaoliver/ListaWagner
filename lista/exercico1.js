// Define o título inicial
document.write("<h2>Números ímpares menores que 100:</h2>");

// Loop pelos números de 1 a 99
for (var i = 1; i < 100; i += 2) {
  // Verifica se o número atual é par ou ímpar
  if (i % 2 == 0) {
    // Se for par, exibe "Par"
    document.write("<p>Número " + i + ": Par</p>");
  } else {
    // Se for ímpar, exibe "Ímpar"
    document.write("<p>Número " + i + ": Ímpar</p>");
  }
}
