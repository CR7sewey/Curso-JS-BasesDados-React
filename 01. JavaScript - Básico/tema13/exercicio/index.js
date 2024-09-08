const form = document.querySelector(".form"); // buscar a tag "form" do HTML pela class
const resultado = document.querySelector(".resultado"); // buscar a tag "resultado" do HTML pela class
// TODO: inicializar um array vazio (const pessoas)

// capturar evento *
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evitar que a página seja atualizada
  const nome = form.querySelector(".nome").value; // buscar o valor do nome
  const sobrenome = form.querySelector(".sobrenome").value;
  const peso = form.querySelector(".peso").value;
  const altura = form.querySelector(".altura").value;
  // TODO: Guardar num objeto os valores (const pessoa = {})

  // TODO: Importar para o array pessoas o objeto pessoa
  //console.log(pessoas); descomentar
  //resultado.innerHTML += `<p>${pessoa.nome}, ${pessoa.sobrenome}, ${pessoa.peso}, ${pessoa.altura}</p>`; // colocar no elemento resultado o elemento p
});
