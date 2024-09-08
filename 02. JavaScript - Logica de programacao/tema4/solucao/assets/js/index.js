function imc(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
}

function grau(imc) {
  const nivel =
    "Abaixo PesoNormal Sobrepeso Obesidade1 Obesidade2 Obesidade3".split(" ");
  if (imc >= 39.9) return nivel[5];

  if (imc >= 33.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function validaForms(peso, altura) {
  if (peso === "" || altura === "") {
    return "Introduza todos os dados";
  }
  p = Number(peso);
  a = Number(altura);

  if (!p) {
    return "Peso inválido";
  }

  if (Number.isNaN(a)) {
    return "Altura inválida";
  }

  return "Continue";
}

function setResultado(resultado, something, valid) {
  resultado.innerHTML = "";
  const p = criaP(valid);
  p.innerHTML = `${something}`; // add info to elemtno
  resultado.appendChild(p); // apend o elemnto no pai (resultado)
}

function criaP(valid) {
  const p = document.createElement("p"); // crio elemento
  if (valid) {
    p.classList.add("paragrafo-resultado"); // classe de p
  } else {
    p.classList.add("paragrafo-resultado-invalido"); // classe de p
  }
  return p;
}

function calculadora() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector(".resultado");

  function receberEvento(evento) {
    evento.preventDefault(); // previne que atualise no button
    const peso = evento.target.querySelector(".peso").value; // evento.target.querySelector(".peso") indentio ao outro pq sabemos que vem do evento
    const altura = form.querySelector(".altura").value;
    let result = "";
    let valid = "";
    result = validaForms(peso, altura);
    if (result === "Continue") {
      result = imc(peso, altura);
      result = `Seu IMC é ${result} (${grau(result)})`;
      valid = " ";
    }

    setResultado(resultado, result, valid);
  }
  form.addEventListener("submit", receberEvento); // evento a executar e funcao (que no caso para)
}

calculadora();
