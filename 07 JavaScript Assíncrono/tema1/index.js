// Promises
// Muitas vezes nao temos noçãoo exata de quando esses dados vao voltar para nos
// ex: uma API que retorna dados de um banco de dados
// uma das solucoes, como ja vista, é usar funcoes de callback,
// que so permite que outra seja executada quando uma tiver sido
// As promises vieram otimizar isto!!

// Para simular uma demora

/*
function tempoAleatorio(min,max) {
    return Math.floor((Math.random()*(max-min) +min))*1000;
}

function espera(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb) cb();
        }, tempo);
    
}

// ISTO É CHATO ASSIM!! POde ficar uma Arvore gigante
espera('Frase 1',tempoAleatorio(1,5), function() {
    espera('Frase 2',tempoAleatorio(1,5, function () {
        espera('Frase 3',tempoAleatorio(1,5)); 
    })); 
}); 
*/

// PROMISES

function tempoAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min) * 1000;
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    // success - resolve, else - reject
    setTimeout(() => {
      if (typeof msg === "number") {
        reject("Not valid!!"); // vai cair no catch, podia reject(new Error(...))
      }
      resolve(msg);
    }, tempo);
  }); //constructor da pormise
}

// executado em paralelo !!!! codigo assincrono
espera("A conecatar com BD ...", tempoAleatorio(1, 5))
  .then((resposta) => {
    console.log(resposta);
    return espera("A buscar dados da bd ...", tempoAleatorio(1, 5)); // Nova promise
  })
  .then((resposta) => {
    console.log(resposta);
    return espera("A tratar dados...", tempoAleatorio(1, 5));
  })
  .then((resposta) => {
    console.log(resposta);
    return espera(123, tempoAleatorio(1, 5)); // é aqui que da erro
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log(e);
  }); // then so é executado após o resolve, cacth sera capturado com o reject

console.log("Isto é exibido antes de qq Promise");

// todo o resolve cai no then,
// se reject cai no catch e para
