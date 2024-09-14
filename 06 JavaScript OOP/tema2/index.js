// OOP - Getter e Setter

//symbol!! - pode ser usado para criar uma chave privada no objeto
// gera id aleatorio
const _velocidade = Symbol("velocidade"); // tipo private
class Carro {
  constructor(nome) {
    //__init__
    this.nome = nome;
    //this.velocidade = 0;
    this[_velocidade] = 0; // propriedade privada dentro da classe
  }

  get velocidade() {
    //atributo e nao funcao
    console.log("Estou no get!");
    return this[_velocidade];
  }

  set velocidade(valor) {
    //atributo e nao funcao
    console.log("Estou no set!");

    if (typeof valor !== "number") {
      return;
    }
    if (valor >= 225 || valor <= 0) {
      return;
    }
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 225) {
      return;
    }
    this[_velocidade]++;
  }

  travar() {
    if (this[_velocidade] <= 0) {
      return;
    }
    this[_velocidade]--;
  }
}

const c1 = new Carro("Opel");
/*
for (let i =0; i<230; i++) {
    c1.acelerar();
    console.log(c1.velocidade);
}*/
c1.velocidade = 200;
c1.velocidade = "ui";
c1.velocidade = 1000;
c1.velocidade = -1;
console.log(c1, c1.velocidade);
