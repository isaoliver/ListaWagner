const numElementos = 20;
let numero1 = 0, numero2 = 1;

let fibonacci = [];

fibonacci.push(numero1);
fibonacci.push(numero2);

for (let i = 2; i < numElementos; i++) {
  let numeroAtual = numero1 + numero2;

  fibonacci.push(numeroAtual);

  numero1 = numero2;
  numero2 = numeroAtual;
}

document.write("<h1>Sequência de Fibonacci</h1>");
document.write("<h3>A sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores. Os 20 primeiros números são:</h3>");
document.write("<p>" + fibonacci.join(", ") + "</p>");
document.write('<img src="images/fibonacci.jpg" alt="Série de Fibonacci">');