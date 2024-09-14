// Funcoes Construtoras - retorna Objetos; É o semelhante a class no java ou python
// Usar classe em vez, melhor, mais semelhante a liguagens orientadas a objetos

// this -> explicar o que é, self etc

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  const ID = 1; //privado

  this.metodo = function () {
    console.log("Isto é um metodo", this.nome, this.idade, ID);
  };
}

const p = new Pessoa("Miguel", "Carvalho", 25);
p.metodo();
console.log(p.ID, p.nome);