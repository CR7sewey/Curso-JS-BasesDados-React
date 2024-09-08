// Valores primitivos vs Referência
/**
 * Primitivos (imutaveis!!) - string, number, boolean, undefined, null (bigint, symbol)
 */

let nome = "Miguel";
nome = "Ricardo";
nome[0] = "M"; // nao muda o valor, imutavel!
console.log(nome);

// Para alterar temos de guardar em outra variável, ou seja
nome = nome.replace("R", "M");
console.log(nome);

let a = "A";
let b = a; // cópia
a = "UIIII";
console.log(a, b); // cada um mantém o valor para a variável referenciada na memória

// Não Primitivo - REFERENCIA (mutável) - valores passadso por referencia (mutavel) - array, object, function
let a1 = [1, 2, 3, 4];
let b1 = a1; // nao é copia, é por referencia, apontam para o mesmo valor na memória
let c = [...a1]; // forma de copiar e nao mudar com as alteracoes de a1 (spreading)
a1.push(5);
a1.push(6);
console.log(a1, b1); // a1 e b1 ficam ambas afetadas, ambas apontam para o mesmo valor na memóra
console.log(c);

const pessoa = {
  nome: "Miguel",
  sobrenome: "Carvalho",
};

const d = pessoa;
const e = { ...pessoa };
pessoa.nome = "Jose";
console.log(pessoa, d, e);
