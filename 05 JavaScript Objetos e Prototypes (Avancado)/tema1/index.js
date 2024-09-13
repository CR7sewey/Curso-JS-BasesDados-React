// Objetos - revisão

// Criar Objetos
// 1ª forma - melhor!
const pessoa = {
  nome: "Miguel",
  idade: 24,
  informacao: function () {
    console.log(this.nome, this.idade);
  },
  get getNome() {
    return this.nome;
  },
  set setNome(value) {
    this.nome = this.nome + " " + value;
  },
};

pessoa.informacao();

// 2ª forma
const pessoa2 = new Object();
pessoa2.nome = "Miguel";
pessoa2.idade = 24;
pessoa2.informacao = function () {
  console.log(pessoa2.nome, pessoa2.idade);
};

pessoa2.informacao();

// Obter elementos do objeto
console.log(pessoa.nome, pessoa["nome"]);

// Alterar
pessoa.nome = "Ruben";
console.log(pessoa.nome);
pessoa.setNome = "Amorim";
console.log(pessoa.nome);

// iterar sobre objetos
const pessoa3 = { nome: "Miguel", idade: 24 };
for (let key in pessoa3) {
  console.log(key, pessoa3[key]);
}

// Factory functions

function pessoa4(nome, sobrenome, idade, peso) {
  return {
    nome,
    sobrenome,
    idade,
    peso,
    get nomeCompleto() {
      // comporta-se como atributo da classe
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(nome_todo) {
      const nome_total = nome_todo.split(" ");
      this.nome = nome_total.shift();
      this.sobrenome = nome_total.join(" ");
    },
  };
}

const p1 = pessoa4("Miguel", "Carvalho", 24, 88);
p1.nomeCompleto = "Ricardo Meireles Assis";
console.log(p1);

// Constructor funtion, semelhante a java
function Pessoa(nome, sobrenome, idade, peso) {
  this.nome = nome;
  this.idade = idade;
  this.sobrenome = sobrenome;
  this.peso = peso;
  const ano = 2024; //private

  this.nomeCompleto = () => {
    // comporta-se como atributo da classe
    return `${this.nome} ${this.sobrenome}`;
  };

  this.nomeCompleto = (nome_todo) => {
    const nome_total = nome_todo.split(" ");
    this.nome = nome_total.shift();
    this.sobrenome = nome_total.join(" ");
  };

  // return this implicito, que é o objeto em si (inicialemnte vazio {})
  // // Object.freeze(this); nao deixa criar nada dentro do objeto, nem alterar nada que vem depois
}
// new cria um novo objeto e atrela this ao objeto vazio
const p2 = new Pessoa("Miguel", "Carvalho", 24, 88);
// Object.freeze(p2); // nao altera mais!!
p2.nomeCompleto("Ricardo Meireles Assis");
// da para alterar a constante pq nos nao estamos a mudar a variavel, continua a apontar para o mesmo endereco, estamos a mudar sim um valor do obj
// ou seja, poso p2.nome = '' (nao altero a referencia de memoria do p2, mas sim do p2.nome) mas nao p2 = {} ...
console.log(p2.nomeCompleto);
console.log(p2);
