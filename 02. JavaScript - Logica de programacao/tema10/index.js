// For in

const frutas = ["A", "B", "C", "D"];
// for in -> le os indices ou chaves do objeto
for (let i in frutas) {
  console.log(i, frutas[i]);
}

const frutas2 = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
};
// le as chaves
for (let chave in frutas2) {
  console.log(chave, frutas2[chave]);
}

console.log(frutas2.a, frutas2["a"]); // formas de aceder aos valores de um objeto