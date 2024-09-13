// Arrays - Concatenacao

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

// Teste 1
console.log(num1 + num2); // nao resulta, concatena como string

// Teste 2
const num3 = num1.concat(num2); // concatena arrays!
console.log(num3);

// Teste 3 - a forma que eu uso na verdade
const num4 = [...num1, ...num2];
console.log(num4);
