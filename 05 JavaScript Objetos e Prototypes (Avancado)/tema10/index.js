// Portotypes com factory functions

// COM COMPOSOCAO - MIXIN
const falar = {
  falar() {
    console.log(`OI`);
  },
};
const comer = {
  comer() {
    console.log(`COMENDO`);
  },
};

//const pessoaPrototype = {...falar,...comer}; ou como em biaox
const pessoaPrototype = Object.assign({}, falar, comer); // associa a um objeto vazio os outros objeto

function criaPessoa(nome, sobrenome, idade, pessoaPrototype) {
  /*const pessoaPrototype = { // sem composicao
        fala() { // nao deviamos pôr diretamente aqui!! consome recursos pq isto cria para cada objeto, deviamos por no pai (__proto__)
            console.log('Oi');
        },
        comer() {
            console.log('Comendo');
        },
    };*/

  return Object.create(pessoaPrototype, {
    nome: {
      // opcional!!
      writable: true,
      configurable: true,
      enumerable: true,
      value: nome,
    },
    sobrenome: {
      // opcional!!
      writable: true,
      configurable: true,
      enumerable: true,
      value: sobrenome,
    },
    idade: {
      // opcional!!
      writable: true,
      configurable: true,
      enumerable: true,
      value: idade,
    },
  });
  /*{
        nome,
        sobrenome, 
        idade,
        fala: function() { // nao deviamos pôr diretamente aqui!! consome recursos pq isto cria para cada objeto, deviamos por no pai (__proto__)
            console.log('Oi');
        },
        comer() {
            console.log('Comendo');
        },

    }*/
}

const p1 = criaPessoa("Mike", "Carvalho", 24, pessoaPrototype);
p1.falar();
console.log(p1.nome);
