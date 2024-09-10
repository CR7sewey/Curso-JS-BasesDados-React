// Tratar Erros - try, catch, throw e finally

// 1º - vamos supor que temos um erro no nosso código, por exemplo tentamos printar uma
// variavel que não existe

// try -> tenta executar o código; catch -> caso haja um erro, é apanhado naquele bloco

try {
  console.log(EuNaoExisto);
} catch (error) {
  console.log(error); // ver o erro -> ReferenceError - not defined
  console.log("Mensagem do erro:", error.message);
}

console.log("----------------------------------");

// 2º Vamos supor que nós pedimos ao utilizador para inserir um username e password
// e elas não fazem match

// throw -> Lancar o erro manualmente

try {
  const username = "miguel"; // hard coded
  const password = "123456"; // hard coded

  // Fazia consulta à base de dados para validar se fazem match (true se fizer e false se nao)
  const match = false;
  if (!match) {
    // significa que !match = true, então entra no if
    throw new Error("O username e a password estão errados :(."); // Nota há vários tipos de erros que podem ser lançados, este é o mais genérico.
  }
} catch (e) {
  console.log(e.message);
}

/* Outro Exemplo: tenho uma funcao que quer receber dois numeros para fazer a soma
function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // throw('Not a number!');
    throw new Error("Not a number!");
  }
  return x + y;
}
try {
  console.log(soma("a", 2));
} catch (error) {
  console.log("Um erro!", error);
}
*/

console.log("----------------------------------");

// 2º ~= 3º Vamos supor que nós pedimos ao utilizador para inserir um username e password
// e elas não fazem match. No entanto, como nós precisamos de conectar a base de dados,
// é importante fazer o fecho dessa conexão para evitar possiveis erros/ataques etc

// throw -> Lancar o erro manualmente
// finally -> acontece sempre independetemente do fluxo anterior

try {
  // Conectei à Base de Dados
  console.log("Abri o Arquivo");

  const username = "miguel"; // hard coded
  const password = "123456"; // hard coded

  // Fazia consulta à base de dados para validar se fazem match (true se fizer e false se nao)
  const match = false;
  if (!match) {
    // significa que !match = true, então entra no if
    console.log("Maniupulei o arquivo e gerou erro");
    throw new Error("O username e a password estão errados :(.");
  }
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Vou me desconectar da DB/fechar o arquivo");
}
