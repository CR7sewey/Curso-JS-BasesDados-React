// For of - específico para objetos iteraveis
// quando tenho variavel iteravel (string, lista, lista de objetos...), o valor ja é o valor em si!!

/*
For clássico - Geralmente com iteráveis (arrays ou strings)
For in - retorna o indice ou chave (string, array ou objetos)
For of - retorna o valor em si, específico para objetos iteraveis
*/

const arr = [1, "Miguel", 3, "Ronaldo", 5];
for (let elemento of arr) {
  // elemento é literalmente o elemento do array
  console.log(elemento);
}

const obj = [
  {
    a: "A",
  },
  {
    b: "B",
  },
];

console.log("- - - - - - - -");

for (let elemento of obj) {
  // elemento é literalmente o elemento do array
  console.log(elemento);
}

console.log("- - - - - - - -");

// Se só objeto não dá, pois não é iteravel
const pessoa = {
  nome: "Miguel",
  idade: 24,
};
/* Erro
for (let elemento of obj2) {
  // elemento é literalmente o elemento do array
  console.log(elemento);
}*/

console.log("- - - - - - - -");

// for útil!
arr.forEach(function (value, index, array) {
  console.log(value, index, array);
});
