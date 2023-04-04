let soma = 0;
let numeros = '';

for (let i = 1; i <= 1000; i++) {
  soma += i;
  
  numeros += i;
  
  if (i < 1000) {
    numeros += ' + ';
  }
}

document.write(numeros + ' = ' + soma);