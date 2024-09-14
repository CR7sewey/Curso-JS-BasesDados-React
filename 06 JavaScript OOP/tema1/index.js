// Classes === funcao contrutora (progrmacao orientada a objetos)

// fazer algo com classe ou fazer com uma funcao construtora é exatamente a mesma
// coisa. Vantagem é que é muito mais semelhante a outras liguagens com python,
// java, até o proptio typescript. Vantagem2: Metodo são automaticamente ligados
// ao prototype, logo torna mais simples, só uma instancia em memoria

class Pessoa {
  constructor(nome, idade) {
    // metodo executado smepre que crio uma classe
    this.nome = nome;
    this.idade = idade;
    console.log("Estou aqui");
  }

  falar() {
    console.log("Oi zezocas");
  }

  comer() {
    console.log("A comer ...", this.nome);
  }
}

const ronaldo = new Pessoa("Ronaldo", 39);
console.log(ronaldo);

// SEMELHANTE MAS COM FUNCAO CONSTRUTORA
function Pessoa2(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa2.prototype.falar = function () {
  console.log("Oi zezocas");
};

Pessoa2.prototype.comer = function () {
  console.log("A comer ...", this.nome);
};

const p1 = new Pessoa2("Mike", "Carvalho");
p1.falar();
console.log(p1);
