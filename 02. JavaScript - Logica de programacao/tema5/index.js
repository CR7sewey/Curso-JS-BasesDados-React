// Operação Ternária

// ? :
// (condicao) ? 'Valor para verdadeiro':'Valor para falso'

const num1 = 5;
// num2 = true if num1 >4 else false
const num2 = num1 > 4 ? true : false;
//
const pontuacaoUser = 10;
const result = pontuacaoUser >= 10 ? "Passou" : "Nao passou";
console.log(result);
// equivalent to
if (pontuacaoUser >= 10) {
  console.log("Passou");
} else {
  console.log("Nao passou");
}

const cor = true || "Oi";
const cor2 = true && "Oi";
console.log(cor, cor2);
