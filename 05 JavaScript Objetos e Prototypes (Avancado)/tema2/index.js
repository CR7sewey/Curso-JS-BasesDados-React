// Objetos - defineProperty e defineProperties

function Produto(nome, preco, stock) {
  this.nome = nome;
  this.preco = preco;
  //this.stock = stock;

  Object.defineProperty(this, "stock", {
    enumerable: true, // mostra a chave
    value: stock, // dar o valor ao stock // mode ser um metodo
    writable: false, //valor nao pode ser alterado
    configurable: false, // pode apagar/configurar (true) ou nao
  }); // tornar stock private

  // varias ao mesmo tempo
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // dar o valor ao stock // mode ser um metodo
      writable: true, //valor nao pode ser alterado
      configurable: true,
    },

    preco: {
      enumerable: true, // mostra a chave
      value: preco, // dar o valor ao stock // mode ser um metodo
      writable: true, //valor nao pode ser alterado
      configurable: true,
    },
  });
}

const p1 = new Produto("Shirt", 20, 3);
console.log(p1);
p1.stock = 0; // nao deixa alterar
delete p1.stock; // nao apaga
delete p1.nome; // apaga
console.log(p1);
console.log(Object.keys(p1)); //ver keys
for (let chave in p1) {
  console.log(chave);
}
