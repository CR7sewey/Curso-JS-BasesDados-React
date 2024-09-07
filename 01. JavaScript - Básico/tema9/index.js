// Interação com o Navegador - alert, confirm e prompt

alert("Isto é um alerta!"); // Nota: nao existe no nodejs !
window.alert("Isto também é um alerta!");
window.confirm("Uma confirmação. Ex: Quer desligar?");
window.prompt("Digitar uma mensagem."); // Para usuario pôr uma mensagem
const ficoComAMensagem = confirm("Uma Mensagem"); // retorna/guarda true ou false na memória
alert(ficoComAMensagem); // true ou false
// feito no window!!

const num1 = prompt("num1: ");
const num2 = prompt("num2: ");
console.log(num1 + num2); // Como resolver isto ?? Converter em number!
console.log(typeof num1, typeof num2);
