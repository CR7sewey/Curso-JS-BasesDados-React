// Funcoes - Introducao e Como declarar funcoes

// Ex 1: Um exemplo que talvez não seja necessário
function soma1(x, y) {
  let a = "ui";
  var b = "uii";
  console.log("1", a, b);
  return x + y;
}

const resultado1 = soma1(1, 2); // executar funcao!
const resultado2 = soma1; // atribuir ao resultado2 a funcao soma. Agora o resultado 2 é a funcao!
console.log(resultado1, resultado2(1, 2));

// Ex 2: Um exemplo que talvez já faça mais sentido
function soma2(x, y) {
  try {
    const new_x = Number(x);
    const new_y = Number(y);
    if (Number.isNaN(new_x) || Number.isNaN(new_y)) {
      throw new Error("Introduza um numero");
    }
    return new_x + new_y;
  } catch (e) {
    return e.message;
  }
}
const resultado3 = soma2(1, 2); // executar funcao!
const resultado4 = soma2; // atribuir ao resultado2 a funcao soma. Agora o resultado 2 é a funcao!
console.log(resultado3, resultado4(1, 2));
console.log(soma2("Ola", 1));

// Formas de Declarar Funções!
// 1ª First-class objects (Objetos de primeira classe - tratar funcao como dado) (função como se fosse uma variável) - function expression
const souUmaFuncaoSoma = function (x, y) {
  return x + y;
};

// 2ª Arrow function (indentico  function expression - Introduzido no ES6)
const souUmaFuncaoSoma2 = (x, y) => {
  return x + y;
};

// 3ª Função clássica (há hoisting - a engine do JS mete a função para o topo do script)
souUmaFuncaoSoma3(1, 2);
function souUmaFuncaoSoma3(x, y) {
  return x + y;
}

// 4º Função decoradora (retorna uma funcao)
function souUmaFuncaoSoma4(x, y) {
  return () => {
    console.log("Aqui", x + y);
    return x + y;
  };
}
const primeira = souUmaFuncaoSoma4(1, 2); // primeira é uma funcao (o return da outra)
primeira();

// 5º Função que executa funcao
function executoUmaFuncao(funcao) {
  console.log("Aqui 2", funcao(1, 2));
}
executoUmaFuncao(souUmaFuncaoSoma3);

// Funções em Objetos
const objetoPessoa = {
  nome: "Miguel",
  sobrenome: "Carvalho",
  idade: 25,
  anoNascimento: function () {
    const anoAtual = new Date();
    return anoAtual.getFullYear() - this.idade;
  },
  anoNascimento2() {
    const anoAtual = new Date();
    return anoAtual.getFullYear() - this.idade;
  },

  anoNascimento3: () => {
    // VAMOS VER ISTO MELHOR DEPOIS!
    // nota - nas arrow functions, o this não é o da hirearquia acima (que seria o objetoPessoa), mas sim o acima (global)
    // entao o this aqui não é o objetoPessoa. Nota tambem que ao definirmos num objeto uma arrow function, é visot como uma
    // propriedade e não como uma funcao ao nivel do objeto!
    const anoAtual = new Date();
    return anoAtual.getFullYear() - objetoPessoa.idade;
  },
};

console.log(
  objetoPessoa.anoNascimento(),
  objetoPessoa.anoNascimento2(),
  objetoPessoa.anoNascimento3()
);
