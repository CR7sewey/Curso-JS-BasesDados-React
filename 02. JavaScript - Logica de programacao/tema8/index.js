// Atribuição via desestruturação

let a = "A";
let b = "B";
let c = "C";
let objeto = {
  nome: "Miguel",
  idade: 25,
  passou: true,
  endereco: {
    rua: "Rua dos Valinhos",
    numero: 31,
  },
};
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2D = [
  [1, 2, 3], // indice = 0
  [4, 5, 6],
  [7, 8, 9],
  [13, 12, 9],
];

// Atribuição via desestruturação - variaveis primitivas
[a, b, c] = ["B", "C", "A"];
console.log(a, b, c);

// Atribuição via desestruturação - array (...spread)
const [arr1, , arr2, ...rest] = array;
console.log(arr1, arr2, rest);

const [arr2D1, arr2D2, [sete, ,], ...rest2] = array2D; //[sete, ,] -> neste caso pega no array2D[2] e depois o primeiro elemento
console.log(arr2D1, arr2D2, sete, rest2);
console.log(arr2D1[0], arr2D2[1], rest2[0]);

// Atribuição via desestruturação - objetos (...spread)
const { nome, idade: age, naoexiste = "", ...resto } = objeto;
console.log(nome, age, resto);
const {
  endereco: { rua: street = "", numero },
  endereco,
} = resto;
console.log(endereco, street);
