// Object - prototypes

// prototypes -> base para trabalhar com heranca e OOP

/*
O JS é baseado em protótipos para passar propriedades e métodos de um objeto para outro

Protótipo: é o termo usado para se referir ao que foi criado pela primeira vez, servindo 
de modelo ou molde para futuras produções

Todos os Objetos tem uma referência interna para um protótipo (__proto__) que vem
da propriedade prototype da função construtora que foi usada para criá-lo. Quando
tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeot,
e depois a cadeia de protótipos é usada até ao topo (null) até encontrar (ou não) o tal membro (à semalhnaça
dos escopos e closures que vimos anteriorment)
*/

// Prototipo -> molde para funcoes
// todos os objetos tem uma referencia interna para um prototipo
// é como se o prototipo tivesse no pai deste objeto (Object)

// molde para criar objetos
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // comentar isto!!!!! - ver sem estar comentado no navegador e com ele comentado
  // this.nomeCompleto = () => "ORIGINAL" + this.nome + " " + this.sobrenome; // probelma de performance, cria varios objetos com este metodo, gasta recursos do servidor do cliente (frontend), aplicacao mais lenta e etc
  // para melhorar isto, podemos criar uma funcao fora e jogar aqui dentro
}

//Pessoa.prototype.estouAqui = 'Oi'; // foi para o prototype, esta linkado ao prototype

Pessoa.prototype.nomeCompleto = function () {
  // Nota: este metodo fica ao nivel do prototype do Pessoa (que é o Object)
  // nao cria para todas as instancias, mas sim para o proto delas!
  return this.nome + " " + this.sobrenome;
}; // nao fica pq ele é subescrito pelo dentro do objeto (procura primeiro la)

// isntancia
const p1 = new Pessoa("Miguel", "Carvalho");
const p2 = new Pessoa("Maria", "Carvalho");
console.log(Pessoa.prototype, p1, p1.__proto__); // Pessoa.prototype = p1.__proto__, p2.__proto__

const data = new Date(); // na window, este objeto nao tem nenhum metodo la

console.dir(p1);

// ordem de cadeia, procura (neste caso, mas podia ser mais com heranca!)
// p1 --> Pessoa.prototype --> Object.prototype
