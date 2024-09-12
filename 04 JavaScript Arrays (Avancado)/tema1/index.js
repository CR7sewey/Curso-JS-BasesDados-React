// Arrays - revisão

const nomes = ["Miguel", "Ze", "Luis"];
nomes[2] = nomes[1]; // passar valor por referencia
delete nomes[1];
console.log(nomes);

const novo = nomes;
// como passei por referencia um valor não primitivo, tanto novo como nomes apontam para o mesmo valor na memória
// Logo
novo[1] = "Ricardo";
console.log(nomes, novo);
// Como corrigir isto ?
const novo2 = [...nomes]; // usamos o spread operator
novo2.pop();
console.log(nomes, novo, novo2);

// Alguns Metodos
novo2.pop(); // Remove ultimo elemento
console.log(novo2);
novo2.push("ZE"); // adiciona elemento ao fim
console.log(novo2);
novo2.forEach((valor, index, array) => {
  console.log(valor, index, array);
});
novo2.push("Ronaldo"); // adiciona elemento ao fim
novo2.shift(); // remove o elento no indice 0 e realoca os outros elementos
console.log(novo2);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(1, 3)); // fatiar array

console.log(arr.filter((valor) => valor % 2 === 0)); // retorna array que respeita a regra na funcao
console.log(arr.find((valor) => valor === 2)); // retorna o valor ou undefined
console.log(arr.map((valor) => valor * 2)); // devolve cada valor do array multiplicado por 2
// ... e mais

// split
const nome_para_array = "Miguel Mota Carvalho".split(" ");
console.log(nome_para_array, nome_para_array.join(", "));

// desestruturacao via atribuicao
const [aa, bb, ...cc] = arr;
console.log(aa, bb, cc);

// Array com construtor
const myArray = new Array();
console.log(myArray);
myArray.push(1);
console.log(myArray);
