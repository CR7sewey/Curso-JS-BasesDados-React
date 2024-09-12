// Factory function - funções que retornam objetos
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    //age: 0, // tenho de incializar assim
    // GETTER - Como se fosse um atributo do objeto, embora pareça uma funcao
    get nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    },
    // Setter - Como se fosse um atributo do objeto, embora pareça uma funcao
    set nomeCompleto(new_nome) {
      new_nome = new_nome.split(" ");
      this.nome = new_nome.shift();
      this.sobrenome = new_nome.join(" ");
    },

    setAge(anos) {
      this.age = anos;
    },
    info() {
      return `A sua altura é ${this.altura} e o seu peso ${this.peso} e o seu imc ${this.imc}`;
    },
    // Getter - Como se fosse um atributo do objeto, embora pareça uma funcao
    get imc() {
      // get funge que imc é num atributo do objeto
      return (this.peso / this.altura ** 2).toFixed(2);
    },
    altura: a,
    peso: p,
  };
}

const p1 = criaPessoa("Mike", "Carvalho", 1.8, 80);
console.log(p1.nomeCompleto);
p1.setAge(24);
console.log(p1.age);
console.log(p1.info());
console.log(p1.imc);
p1.nomeCompleto = "Miguel Mota Carvalho";
console.log(p1.nomeCompleto, "1", p1.nome, "2", p1.sobrenome);
