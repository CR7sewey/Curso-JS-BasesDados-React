// Funcoes - Parametros da Função

// Parametros - da função
// Argumentos - passados na execução

// 1º - funcao sem parametros
// arguments - parametros (argumentos passados) da funcao guardados como arguments: objeto do tipo {'0': argumento[0], ...}
// Nota: arguments so disponivel quando declaramos a funcao como function
function funcao() {
  console.log(arguments, arguments[0]);
}
funcao();
funcao(1, 2, 3, 4, 5); // ou seja, embora na contrução da funcao nao tenha pensado nenhum parametro, estes argumentos passados ficam guardados em arguments

function soma(a) {
  let total = 0;
  console.log(arguments);
  for (let i of arguments) {
    total += i;
  }
  console.log(a, total);
}
soma(10, 20, 30, 40, 50); // a tambem pertence aquele arguments!

// Agora o contrario

function soma2(a, b, c, d, e = 0) {
  // e = 0 valor default
  console.log(a, b, c, d, e);
}
soma2(1);

// Atribuicao via desestruturacao - objetos
function soma3({ nome, sobrenome, idade }) {
  console.log(nome, idade, sobrenome);
}
soma3({ nome: "Miguel" });
soma3({ nome: "Miguel", sobrenome: "Carvalho", idade: 25 });

function soma4({ ...props }) {
  console.log(props.nome, props.idade, props.sobrenome);
}
soma4({ nome: "Miguel", sobrenome: "Carvalho", idade: 25 });

// Atribuicao via desestruturacao - array
function soma5([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
soma5([1, 2, 3]);

function soma6(...valor) {
  console.log(valor[0], valor[1], valor[2]);
}
soma6(1, 2, 3);

// mais sobre o operador rest ...
const conta = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);

  for (let i of numeros) {
    if (operador === "+") {
      acumulador += i;
    }
  }
  console.log(acumulador);
};
conta("+", 0, 1, 2, 3, 4, 5); // ou seja nao preciso de passar um array!!
