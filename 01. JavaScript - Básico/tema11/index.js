// Numbers - visao mais detalhada

let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 12.89425131;

console.log(String(num1) + num2); //12.5 - concatenacao

// Metodos para Objetos do tipo number
console.log(num1.toString() + num2); // 12.5 - concatenacao (pois string); converte em String
console.log(num3.toFixed(2), typeof num3.toFixed(2)); // 12.89 - arredonda a 2 casas decimais; retorna string !
console.log(Number.isInteger(num1)); // true - inteiro, false - nao inteiro
let temp = num1 * "Oi";
console.log(temp, Number.isNaN(temp)); // NaN - not a number, true if NaN

// Imprecisão - padrão IEEE 754-2008
console.log(0.7 + 0.1); // da 0.7999999999999999
num1 = 0.7;
num2 = 0.1;
num1 += num2; // 0.8 - sem imprecisao
num1 += num2; // 0.9 - sem imprecisao
num1 += num2; // 1.0 - sem imprecisao
// Resolver com Metodos e Objetos
num1 = num1.toFixed(2); // retorna string
let temp_num1 = Number(num1); // ou parseInt(num1) ou parseFloat(num1)!
console.log(num1, Number.isInteger(num1), Number.isInteger(temp_num1)); // o toFixed nao o torna inteiro! embora pareca
temp_num1 += num2;
temp_num1 += num2;
let temp_num1_2 = Number(temp_num1.toFixed(2));
console.log(
  temp_num1,
  Number.isInteger(temp_num1_2),
  temp_num1_2,
  parseInt(temp_num1_2)
);

// Resolver com contas, evitar realizar contas com pontos flutuante
console.log(temp_num1);
num1 = 0.7;
num2 = 0.1;
num1 = (num1 * 100 + num2 * 100) / 100; // (70 + 10) / 100
console.log(num1, Number.isInteger(num1));

// Objeto Math
num1 = 9.54578;
console.log(Math.floor(num1)); // arredonda baixo
console.log(Math.ceil(num1)); // arredonda cima
console.log(Math.random()); // gera numero random entre 0 e 1
console.log(Math.round(num1), Math.round(9.4)); // arredonda o numero para o numero inteiro mais proximo
console.log(Math.abs(-5)); // modulo
console.log(Math.sqrt(4)); // raiz quadrada
console.log(Math.max(1, 5, 1, 3, 10)); // maximo
console.log(Math.min(1, 5, 1, 3, 10)); // minimo

const aleatorioNumber = Math.round(Math.random() * (10 - 5) + 5); // entre 10 e 5 aleatorio
console.log(aleatorioNumber);
console.log(Math.pow(2, 3)); // 2**3
console.log(Math.PI); // pi
console.log(9 ** 0.5); // aka sqrt

console.log(100 / 0); // da infinity portanto ter atencao a isto!!
console.log(100 * "0"); // faz como se fosse 100 * 0 = 0
