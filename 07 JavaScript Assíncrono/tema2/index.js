// Promises - Metodos

function tempoAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min) * 1000;
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    // success - resolve, else - reject
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(false); // vai cair no catch, podia reject(new Error(...))
        return;
      }
      resolve(msg + " - Estive na promise " + tempo);
    }, tempo);
  }); //constructor da pormise
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject
// Promise.all
const promises = [
  "Primeiro valor",
  espera("Promise 1", tempoAleatorio(1, 5)),
  //espera(1000, tempoAleatorio(1,5)),
  espera("Promise 2", tempoAleatorio(1, 3)),
  espera("Promise 3", tempoAleatorio(1, 6)),
  "Outro valor",
];

Promise.all(promises) // faz tudo na ordem (como se tivesse mandado varios thens)
  .then(function (valor) {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

//Promise.race - tipo corrida (literalmente!), a primeira resolvida é devolvlida, mas os setTimeOut continua a executar
const promises2 = [
  // 'Primeiro' -> é como se fosse ja resolvida por isso é sempre priemiro
  espera("Promise 1", tempoAleatorio(1, 5)),
  //espera(1000, tempoAleatorio(1,5)), // so da erro se for o primeiro
  espera("Promise 2", tempoAleatorio(1, 5)),
  espera("Promise 3", tempoAleatorio(1, 5)),
];
/*
Promise.race(promises2) 
.then(function(valor) {
    console.log(valor)
})
.catch(erro => {
    console.log(erro);
});*/

// Promise.resolve and reject
function baixaPagina() {
  const emCache = true;
  if (emCache) {
    //return Promise.resolve('Pagina em cache'); // nao preciso esperar pq ja esta
    return Promise.reject(false); // nao preciso esperar pq ja esta
  } else {
    return espera("A baixar a pagina", 1000);
  }
}

baixaPagina()
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log("Erro", erro);
  });
