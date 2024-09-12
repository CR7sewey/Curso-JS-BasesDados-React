// Criar um calculadora com factory function

function criarMinhaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      // metodo que vai despertar todas as ações da calculadora
      this.botaoEnter();
      this.clicarBotoes();
    },

    botaoEnter() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.botaoIgual();
        }
      });
    },

    clicarBotoes() {
      document.addEventListener("click", (e) => {
        const elemento = e.target;

        // se numero ou figura faz x (ver html - btn-html)
        // se botao de clear faz x (ver html - btn-clear)
        // se botao de delete ou figura faz x (ver html - btn-del)
        // se botao de ifual faz x (ver html - btn-eq)
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    eliminarAlgum() {
      // fazer metodo para alterar o que aparece no this.display
    },

    botaoIgual() {
      let conta = this.display.value;
      try {
        conta = eval(conta);

        if (!conta) {
          alert("Invalid sequence of digits!!");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("Invalid sequence of digits!!");
        return;
      }
    },
  };
}

const calc = criarMinhaCalculadora();
calc.inicia();
