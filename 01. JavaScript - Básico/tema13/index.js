// Objetos - Básico

const informacaoMiguel = {
  nome: "Miguel",
  idade: 25,
  turma: "A",
  passou: true,
};

console.log(informacaoMiguel.nome, informacaoMiguel.idade);

// Poder Objetos

const exemplo = {
  nome: "Miguel",
  idade: 25,
  turma: "A",
  passou: true,
  incrementaIdade: () => {
    this.idade++;
  },
  alteraPassou() {
    this.passou = !this.passou;
  },
};

exemplo.alteraPassou();
console.log(exemplo);
