// Metodos Objetos

/*
Object.values
Object.entries
Objetet.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Oject.keys (retorna chaves)
Object.freeze(congela o objeto)
Object.defineProperties / defineProperty
*/

const produto = {
  nome: "Caneca",
  preco: 1.8,
};
const outraCoisa = produto; // outraCoisa aponta para produto

const outraCoisaIndependente = { ...produto, marca: "X" }; // spread, aponta para outro Local na memoria
//ou
const outraCoisaIndependente2 = Object.assign({}, produto, { marca: "X" });

console.log(outraCoisaIndependente, outraCoisaIndependente2);

// para copiar so algumas chaves: vlaores
const caneca = { nome: produto.nome };

produto.nome = "Carro";
console.log(outraCoisa, outraCoisaIndependente, outraCoisaIndependente2);

console.log(Object.keys(outraCoisaIndependente2)); // retorna keys num array
Object.freeze(outraCoisaIndependente2); // faz com que o objeto se torne estático - não mudavel
outraCoisaIndependente2.nome = "Carro";
console.log(outraCoisaIndependente2); // nao mudou!!

// retorna as propriedades da propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(outraCoisaIndependente2, "nome"));

console.log(Object.values(outraCoisaIndependente2)); //values
console.log(Object.entries(outraCoisaIndependente2)); // da entries, [[key,value]]
//ex:
for (let [chave, valor] of Object.entries(outraCoisaIndependente2)) {
  console.log("O meu conjunto [key, value] =", chave, valor);
}
