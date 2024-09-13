// Arrays - Metodo Splice

const nomes = ["Mike", "Ana", "Maria", "Carina", "Alex"];

// Metodo splice - é como ter o pop, push, shift e unsfhit em 1 método
// array.splice(indice,deleteCount,elemento1,elemento2,...)

// pop
const nomes2 = [...nomes];
const removido = nomes2.splice(nomes2.length - 1, 1); // remove alex
console.log(nomes2, removido);
// remover vários
const removido2 = nomes2.splice(nomes2.length - 2, 2); // remove 'Maria' e Carina
console.log(nomes2, removido2);

// push
const nomes3 = [...nomes];
nomes3.splice(nomes3.length, 0, "Miguel", "Ricardo"); // Adiciona Miguel, Ricardo
console.log(nomes3);

// shift
const nomes4 = [...nomes];
nomes4.splice(0, 1); // Remove Mike
console.log(nomes4);

// unshift
const nomes5 = [...nomes];
nomes5.splice(0, 0, "Ronaldo"); // Adiciona Ronaldo ao inicio
console.log(nomes5);

// Push + Pop
const nomes6 = [...nomes];
nomes6.splice(nomes6.length - 1, 1, "FINAL", "FINAL2"); // É removido 'Alex' e são Adicionaod Final e Final2 (ao final)
console.log(nomes6);
