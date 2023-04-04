let num = prompt("Digite um número inteiro:");

if (Number.isInteger(Number(num))) {
  let raizQuadrada = Math.sqrt(num);
  let raizCubica = Math.cbrt(num);
  let potencia = num ** num;

  alert(`Raiz quadrada: ${raizQuadrada}\nRaiz cúbica: ${raizCubica}\nPotência de ${num}: ${potencia}`);
} else {
  alert("Por favor, digite um número inteiro!!!");
}