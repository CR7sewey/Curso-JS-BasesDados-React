// Exercicio
// Pedir ao utilizador para introduzir um numero - TODO
const numero;

// Ir buscar o elemento html - aprenderemos mais tarde
const numeroTitulo = document.getElementById("numero-titulo");
// Ir buscar o elemento html - aprenderemos mais tarde
const texto = document.getElementById("texto");

// Alterar o texto de uma tag html
numeroTitulo.innerHTML = numero;

texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadrada ${/** TODO */}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${/** TODO */}</p>`;
texto.innerHTML += `<p>É NaN: ${/** TODO */}</p>`;
texto.innerHTML += `<p>Arrendondando para baixo: ${/** TODO */}</p>`;
texto.innerHTML += `<p>Arrendondando para cima: ${/** TODO */}</p>`;
texto.innerHTML += `<p>Duas casas decimais: ${/** TODO */}</p>`;
