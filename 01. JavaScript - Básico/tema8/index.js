/**
 * Aritméticos
 * +, -, /, *
 * ** - Potenciacao
 * % - resto da divisao
 * 1º () ** [* / %] [+ -] end
 */
console.log(5 * 2 + (4 - 1) * 2 ** 2); // 10 + 3*4

const num1 = 5;
const num2 = 10;
const str1 = "5";
const nome1 = "Miguel";

let soma = num1 + num2;
console.log("Soma:", soma);

let concatenacao = str1 + num2; // concatenacao
console.log(
  "Concatenação:",
  concatenacao,
  num2 + str1,
  num1 + nome1,
  nome1 + num1
);

let multi = num1 * num2;
console.log("Multiplicacao:", multi);

let div = num2 / num1;
console.log("Divisao:", div);

let sub = num1 - num2;
console.log("Subtracao:", sub);

let pot = num1 ** num2;
console.log("Potencia:", pot);

let rest = num2 % num1;
console.log("Resto da Divisao:", rest);

// Como funcionam contadores -> incremento ++; decremento --
let contador = 1;
contador++; // 2 aqui primeiro tem o valor do contador e depois soma
++contador; // 3 incrementa primeiro ao valor!
contador--; //2
--contador; //1
contador += 1; // contador = contador + 1
contador **= 2; // contador = contador**2
contador **= 2; // contador = contador**2
contador *= 2; // contador = contador*2
contador /= 4; // contador = contador/4
console.log(contador);

const d = 10;
const e = "Mike";
const r = "5.2";
const r_converted_parseInt = parseInt(r);
const r_converted_parseFloat = parseFloat(r);
const r_converted_Number = Number(r);
console.log(r_converted_parseInt, r_converted_parseFloat, r_converted_Number);

// Misterios do JS - ver info.txt
console.log(d * e, e * d); // NaN - not a number
console.log(d * r, r * d); // aqui multiplica. Pq? pq o javascript é doido :)
console.log(d + r_converted_parseInt, typeof (d + r_converted_parseInt));
