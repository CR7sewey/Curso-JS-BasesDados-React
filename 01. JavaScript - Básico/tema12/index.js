// Arrays - Básico

const alunos = ["Miguel", "Ronaldo", "Maria"];
const arrayMaluco = [1, "Miguel", true, 2.3, null, undefined]; // evitar tipos primitivos diferentes
console.log(alunos);
console.log(arrayMaluco);

// Os arrays são indexados (semelhante a string)
//                  0          1         2
const alunos2 = ["Miguel", "Ronaldo", "Maria"];
console.log(alunos2[0], alunos2[0][0]);

// Alguns métodos de array
const alunos3 = ["Miguel", "Ronaldo", "Maria"];

alunos3.push("Ricardo"); // adiciona "Ricardo" ao final da lista
console.log(alunos3);

console.log(alunos3.includes("Ricardo")); // true -> vai ver se "Ricardo" está na lista

alunos3.unshift("Bruno"); // adiciona "Bruno" ao inicio da lista
console.log(alunos3);

alunos3[0] = "Jose"; // altera o indice 0 da lista
console.log(alunos3);

const removido = alunos3.pop(); // remove o ultimo elemento da lista
console.log(alunos3);

alunos3.shift(); // remove o primeiro elemento da lista
console.log(alunos3);

delete alunos3[0]; // não reajusta o array, fica com o empty item
console.log(alunos3);

console.log(alunos3[10]); // dá undefined -  nao existe na memoria

console.log(alunos3.slice(0, 2)); // fatia array do indice 0 ao 2 (exclusive)
console.log(alunos3.slice(0, -1)); // fatia array do indice 0 ao -1 (exclusive)

console.log(alunos3 instanceof Array); // validar se é do tipo Array
const arrayComArray = new Array();
arrayComArray.push(1);
arrayComArray.push(2);
console.log(arrayComArray, "Sou um Array");

// const vs let em Arrays

const souUmaConst = [1, 2, 3];
let souUmaLet = [1, 2, 3];

souUmaConst.push(4); // altero a variavel do tipo const (array - mutavel), mas não altero a referencia na memória
souUmaLet.push(4);
console.log(souUmaConst, souUmaLet);
// souUmaConst = 1; dá erro, pois é const, não posso reatribuir (portanto local na memória é o mesmo)
console.log(souUmaConst);
souUmaLet = 1;
console.log(souUmaLet);
