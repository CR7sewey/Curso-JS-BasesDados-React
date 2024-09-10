// funcao que formata a hora!
// recebe valor em segundos e retorna num formato de hora
function formataHora(segundos) {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

// const container
// const tempo
let segundos = 0;
let timer;

container.addEventListener("click", (evento) => {
  const elemento = evento.target;
  console.log(elemento);

  if (elemento.classList.contains("iniciar")) {
    // codigo
  } else if (elemento.classList.contains("zerar")) {
    // codigo
  } else if (elemento.classList.contains("pausar")) {
    // codigo
  }
});
