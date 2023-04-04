let altura, sexo, maoDominante;
let masculino = 0, feminino = 0, destro = 0, canhoto = 0;

for (let i = 1; i <= 5; i++) {
  do {
    altura = parseFloat(prompt(`Digite a altura da pessoa ${i}:`));
    if (isNaN(altura)) {
      alert("Digite um número válido para a altura,por favor.");
    }
  } while (isNaN(altura));


  do {
    sexo = prompt(`Escreva o sexo da pessoa ${i} (Masculino ou Feminino):`).toLowerCase();
    if (sexo !== "masculino" && sexo !== "feminino") {
      alert("Por favor, digite 'masculino' ou 'feminino' para o sexo.");
    }
  } while (sexo !== "masculino" && sexo !== "feminino");

  do {
    maoDominante = prompt(`Digite a mão dominante da pessoa ${i} (Destro ou Canhoto):`).toLowerCase();
    if (maoDominante !== "destro" && maoDominante !== "canhoto") {
      alert("Por favor, digite 'destro' ou 'canhoto' para a mão dominante.");
    }
  } while (maoDominante !== "destro" && maoDominante !== "canhoto");

  if (sexo === "masculino") {
    masculino++;
  } else {
    feminino++;
  }

  if (maoDominante === "destro") {
    destro++;
  } else {
    canhoto++;
  }
}

let porcentagemDestro = (destro / 5) * 100;
let porcentagemCanhoto = (canhoto / 5) * 100;

document.write(`Quantidade de pessoas sexo masculino: ${masculino} <br>`);
document.write(`Quantidade de pessoas sexo feminino: ${feminino} <br>`);
document.write(`Porcentagem destros: ${porcentagemDestro.toFixed(2)}% <br>`);
document.write(`Porcentagem canhotos: ${porcentagemCanhoto.toFixed(2)}%`);