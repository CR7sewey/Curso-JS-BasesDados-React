// Estruturas de Dados Condicionais
const hora = 19;

if (hora < 12 && hora >= 0) {
  console.log("Bom dia!");
} else if (hora < 18 && hora >= 12) {
  console.log("Boa tarde!");
} else if (hora < 24 && hora >= 18) {
  console.log("Boa noite!");
} else {
  console.log("Hmmm... estranho!");
}

const ze = "Ze";
if (ze) {
  console.log("Aqui");
} else {
  console.log("Aqui 2");
}

if (true) {
  console.log("Ola");
}
console.log("Não estou em nenhum if");
