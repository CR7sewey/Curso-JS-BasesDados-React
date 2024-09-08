// Curto-Circuito
/**
 * && -> false && true && 0 -> false // a partir do momento que achei false, pode parar
 * || -> true || false || 'Miguel' -> true
 *
 * FALSY values (valores que equivalem a falso)
 * *false
 * 0
 * '' "" ``
 * null/ undefined
 * NaN
 */

// Exemplos
console.log("Miguel" && true && "Luis");
console.log("Miguel" || false || "Luis");
console.log("Miguel" && false && "Luis");
console.log(0 && "" && null && NaN); // retorna logo o primeiro false (sao todos)
