// Adicionar os elementos do array elementos ao html (onde diz <!--- Aqui --->)
/*
Passos:
1- ir buscar a section ao html
2- criar uma div para armazenar os futuros elementos (.createElement)
3- Adicionar os elementos à div com texto. Qual a melhor estratégia?
    - .innerText
    - appendChild
*/

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

function toHtml() {
  //const section
  //const div
  /*
    3- Adicionar os elementos à div com texto.
  */
  //  section.appendChild(div);
}

toHtml();

// Notas:

// dom - document object model - interface de objetos que me permite manipular a pagina
// bom - browser object model - a parte do window
// node - nao tem a parte window (prompt, alert, essas cenas), dai nao vermos nada disto aqui, so no browser

// html child de document, document child de window
// ver arvore do DOM
