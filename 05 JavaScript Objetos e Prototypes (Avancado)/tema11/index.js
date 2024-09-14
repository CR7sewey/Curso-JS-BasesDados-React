// estrutura de dados map!! - ver documentacao
const pessoas = [
  { id: 3, nome: "Mike" },
  { id: 2, nome: "Ze" },
  { id: 1, nome: "Carlos" },
];

/* Problema, fazer console log e ver order como imprime
const novasPessoas = {};
for (const {id,nome} of pessoas) { // destructuring, podia fazer pessoas of pessoas
    console.log(id,nome);
    novasPessoas[id] = {id, nome};
}
console.log(novasPessoas)*/

const novasPessoas = new Map(); // HashMap java??
for (const { id, nome } of pessoas) {
  // destructuring, podia fazer pessoas of pessoas
  console.log(id, nome);
  novasPessoas.set(id, { id, nome });
  //novasPessoas[id] = {id, nome};
}
console.log(novasPessoas, novasPessoas.get(2));
for (const [chave, { id, nome }] of novasPessoas) {
  // equivalente [a,b] = [1,2]
  //console.log(pessoa) // array
  console.log(chave, id, nome);
}
novasPessoas.delete(2);
console.log(novasPessoas);
