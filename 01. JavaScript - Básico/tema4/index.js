let nome1 = "Miguel";
let year = 2000;
let nome2 = "Maria";
let nome3; // Declaramos apenas a variavel
console.log(nome3); // undefined
nome3 = "Ricardo"; // Inicializar a variavel

console.log(nome1, "nasceu em", year);
console.log(nome2, "é casado com", nome1);
nome2 = nome3;
console.log(nome2, "é casado com", nome1);

// var vs let
var nome = "Miguel";
var nome = "Nuno";
console.log(nome);

// Mais tarde vamos voltar aqui!
let a = 1;
var b = 11; // do escopo global
console.log(a, b); //1 11
{
  let a = 2; // so deste escopo
  var b = 12; // torna-se global!
  console.log(a, b); // 2, 12
}
console.log(a, b); //1 12
