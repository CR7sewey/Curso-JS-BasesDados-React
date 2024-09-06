//console.log(Miguel);
console.log("Miguel");
console.log("Miguel"); // ''
console.log(`Miguel`);

//console.log("Ola, eu sou o "Miguel""); // dá erro, pois a engine do JS acha que eu tenho "Ola eu sou o " Miguel""
console.log("Ola, eu sou o 'Miguel'"); // já funciona!
console.log('Ola, eu sou o "Miguel"'); // já funciona!

/* NOTA:
 * Tudo o que tiver dentro de "" é considerado String pelo JS (tipo) -> console.log(typeof "Miguel")
 * console.log(1); o 1 é um Número
 * console.log(1.1); o 1.1 é um Número (Ponto Flutuante)
 */

console.log(1, 2, 3, 4, "Miguel", "Ronaldo");
console.log(1, typeof 1, "Miguel", typeof "Miguel");
