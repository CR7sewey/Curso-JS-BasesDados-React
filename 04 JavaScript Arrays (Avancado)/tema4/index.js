// Arrays - Filter, Map e Reduce

const salaries = [
  1000, 2000, 1350, 875, 900, 1200, 800, 1000, 2000, 1350, 875, 900, 1200, 800,
];

const nomes = ["Mike", "Ana", "Mariaaaaaaaa", "Carina", "Alex"];

// Filter - passo dentro do filter uma funcao que vai avaliar se o valor é ou não maior que 1000

/*function callbackFilter(valor, indice, array) {
    // if (valor > 1000) ...
    return valor > 1000; // true or false
}
const sal1000 = salaries.filter(callbackFilter);*/

const sal1000 = salaries.filter(
  (sal, indice, array) => {
    return sal > 1000;
  } // neste caso return sal > 1000
);
console.log(sal1000);

const nomesComecadosPorM = nomes.filter((nome) => nome.startsWith("M"));
console.log(nomesComecadosPorM);

// Map - Aplico a funcao passada a todos os elementos do array - retorno o array original modificado

const salDobro = salaries.map((sal) => sal * 2);
console.log(salDobro);

const nomesMaiusculas = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculas);

// Reduce - reduzo array a um elemento atraves de uma funcao

const somaDeSal = salaries.reduce((acumulador, valor, index, array) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(somaDeSal);

const maiorNome = nomes.reduce((acumulador, valor, index, array) => {
  if (acumulador.length < valor.length) {
    acumulador = valor;
  }
  return acumulador;
}, "");
console.log(maiorNome);

// TUDO JUNTO

const somaDoDobroDeSalariosDe1000 = salaries
  .filter((sal) => sal >= 1000)
  .map((sal) => sal * 2)
  .reduce((acc, val) => {
    return acc + val;
  }, 0);
console.log(somaDoDobroDeSalariosDe1000);
