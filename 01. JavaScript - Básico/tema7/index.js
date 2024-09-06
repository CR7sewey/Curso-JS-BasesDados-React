// string
const nome1 = "Miguel"; //STRING
const nome2 = "Miguel"; //STRING
const nome3 = `Miguel`; //STRING

// number
const num1 = 10; // num
const num2 = 10.5; //num

// difente nao estar defindo de ser null
let nomeAluno; // undefined = nao aponta para local nenhum na memoria
let sobrenomeAluno = null; // Nulo = nao aponta para local nenhum na memoria

// boolean
const boolean = true; //false

// typeof to check type of variable
console.log(
  typeof nome1,
  typeof num1,
  typeof nomeAluno,
  typeof sobrenomeAluno,
  typeof boolean
);

// DADOS PRIMITICOS
let a = 2;
let c = a;
a = 3;
// c = 2, a = 3
console.log(a, c);

let array = [1, 2, 3];
let array2 = array;
array.push(1); // adicionar valor em array -> vamos ver depois
console.log(array, array2); // ambos ficam com o mesmo valor, pois a referencia na memoria é a mesma
