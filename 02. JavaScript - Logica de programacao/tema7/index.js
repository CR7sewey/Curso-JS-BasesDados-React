// Mias diferenças entre var e let

// não podemos reclarar let no meu escopo
let nome = "Miguel";
//let nome = 'Pedro'
var nome2 = "Ze";
var nome2 = "Joao";

// podemos redeclarar em escopos diferentes
// let tem escopo de bloco, var so tem global
// bloco/escopo - {};
console.log(nome, nome2);
if (true) {
  let nome = "Joana"; // so valida dentro do escopo do if
  var nome2 = "Leonel"; // variavel fica global
  console.log(nome, nome2);
}
console.log(nome, nome2);
console.log("--------------------------------");
// noção de escopo
let soulet = "Miguel";
var souvar = "Pedro";
if (true) {
  // bloco/escopo 1
  let soulet = "Miguel 2"; // redeclara a variavel so dentro do bloco
  var souvar = "Pedro 2"; // redeclara e altera a variavel em todos os blocos/escopos
  console.log(soulet, souvar);
  if (true) {
    // bloco 2
    let soulet = "Miguel 3"; // redeclara a variavel so dentro do bloco
    var souvar = "Pedro 3"; // redeclara e altera a variavel em todos os blocos/escopos
    console.log(soulet, souvar);
    if (true) {
      /* Erro -> ele procura primeiro dentro do bloco, e acha a variavel inicializada aqui só que só depois (hoisting)
      console.log(soulet);
      let soulet = "Miguel 4"; // redeclara a variavel so dentro do bloco
      */
      let soEstouAqui = "AQUI";
    }
    //console.log(soEstouAqui); Erro -> só é acessivel dentro do escopo onde está
  }
}
console.log(soulet, souvar);

// !!! com let, o engine do js vai buscar primeiro dentro do bloco, dps do bloco mais acima e assim sucessivamente!!
// !!! com var, a variavel torna-se global, modifica em todos os blocos

// Hoisting
// com var
console.log(hoisting); // deveria dar erro pq s so é defenida dps, mas o js faz hosting, ele eleva a declaracao de variavel
// é como se mete-se var hoisting; em cima!!
var hoisting = "Mike";

// com let
// da erro!!

// funcoes tmb faz isto como o var! com function
