// setInterval e setTimeOut

// setTimeOut -> passamos uma funcao como primeiro argumento (referencia), e como segundo argumento um tempo (em ms)
//               essa funcao só será executada após o tempo introduzido!

// setInterval -> passamos uma funcao como primeiro argumento (referencia), e como segundo argumento um tempo (em ms)
//                essa funcao é executada a cada tempo introduzido

// clearInterval -> funcao para limpar/parar o efeito do setInterval

function soma(x, y) {
  return x + y;
}

console.log(soma(1, 2));

setTimeout(function () {
  console.log("Boa Tarde");
}, 2000);

console.log("Ola");

let i = 0;
const timer = setInterval(function () {
  console.log(i++);
}, 3000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);