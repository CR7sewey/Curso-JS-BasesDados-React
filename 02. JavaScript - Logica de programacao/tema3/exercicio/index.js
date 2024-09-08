// Dada um Peso e uma Altura enviada pelo utilizador, determina o IMC e o Resultado

const IMC = [
  "Menos do que 18.5",
  "Entre 18.5 e 24.9",
  "Entre 25 e 29.9",
  "Entre 30 e 34.9",
  "Entre 35 e 39.9",
  "Mais de 40",
];

const resultado = [
  "Abaixo do peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau 1",
  "Obesidade grau 2",
  "Obesidade grau 3",
];

const form = document.querySelector(".form");
const result = document.querySelector(".resultado");
let imc; // para guardar o imc mais tarde
let tipo; // para guardar o tipo mais tarde

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // previne que atualise no button
  // const peso = // TODO - buscar o elemento com classe peso ao html e o valor (.valor)
  // const altura = // TODO - buscar o elemento com classe altura ao html e o valor (.valor)
  if (peso === "" || altura === "") {
    // validar que ambos foram introduzidos
    alert("Introduza todos os dados!");
    return;
  }

  // converter em number
  p = Number(peso);
  a = Number(altura);

  if (!p) {
    // pois é NaN
    alert("Peso inválido");
    return;
  }

  if (Number.isNaN(a)) {
    // pois é NaN
    alert("Altura inválida");
    return;
  }

  // imc = // TODO: calcular IMC (peso/altura**2), arredondado a 2 casas decimais e converter para number

  /* TODO -> se o imc for maior que x, o tipo deve ser igual a resultado[?]
  ex:
  if (imc >= 39.9) {
    tipo = resultado[5];
  }
*/

  // TODO -> meter no result o texto `<p>Seu IMC é ${imc} (${tipo})</p>`;
});
