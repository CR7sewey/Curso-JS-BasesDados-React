// Operadores de Comparação - retorna true or false (Boolean)
/*
 * > maior
 * >= maior ou igual a
 * < menor
 * <= menor ou igual a
 * == igualdade (valor) igualdade ** não recomendavel
 * === igualdade estrita (valor e tipo) igualdade estrita
 * != diferente (valor) ** não recomendavel
 * !== diferente estrito (valor e tipo)
 */

console.log(10 === 5);
console.log(10 >= 5);
const comp = 11 === 11;
console.log(comp);
const comp1 = 10 == "10";
const comp2 = 10 === "10";
console.log(comp1, comp2);

// Operadores Lógicos - para validar mais de uma operação
/*
OPERADORES LOGICOS
&& -> AND
|| -> OR
! -> Not
*/

const comp4 = 1 > 0 && 3 >= 3;
const comp5 = 1 > 0 && 3 > 3;
console.log(comp4, comp5);
console.log(true && false);
console.log(false && false);
console.log(true && true);

const comp3 = 1 > 3 || 3 > 3;
const comp6 = 1 > 0 || 3 > 3;
console.log(comp3, comp6, !comp3, !comp6);
