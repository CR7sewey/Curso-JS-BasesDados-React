// Funcao para criar botao!
function createButtonApagar() {
  const botao_apaga = document.createElement("button");
  botao_apaga.innerText = "Apagar";
  botao_apaga.setAttribute("class", "apagar");
  botao_apaga.setAttribute("value", "Apagar");
  botao_apaga.setAttribute("onclick", "click");
  return botao_apaga;
}

//const container
//const ul

container.addEventListener("click", (evento) => {
  // const elemento =

  if (elemento.classList.contains("adicionar-tarefa")) {
    //const valor =
    if (valor === "") {
      alert("Introduza um valor");
    }
    // const linha = criar linha .createElement
    // linha.innerHTML =
    // append child (butao) à linha
    // append child (linha) ao ul
  }

  if (elemento.classList.contains("apagar")) {
    const li_apagar = elemento.parentElement;
    // remover elemento da ul
  }
});
