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
      resolve(msg + " - Estive na promise - " + tempo);
    }, tempo);
  }); //constructor da pormise
}

// vamos supor que queremos entao executar de forma sequencial um codigo!!
// continua muito verbose
/*
espera('Fase 1', tempoAleatorio(1,5))
.then((valor) => {
    console.log(valor);
    return espera('Fase 2', tempoAleatorio(1,5));}
    )
.then(valor => {
    console.log(valor);
    return espera('Fase 3', tempoAleatorio(1,5));}
    )
.then(valor => console.log(valor))
.catch(erro => console.log('Some error', erro));*/

async function executa() {
  // so posso usar await com async
  try {
    // const fase1 = espera('Fase 1', tempoAleatorio(1,5)); PENDIG
    const fase1 = await espera("Fase 1", tempoAleatorio(1, 5));
    console.log(fase1);
    const fase2 = await espera(1, tempoAleatorio(1, 5)).then((valor) =>
      console.log(valor)
    ); //.catch(e => {console.log(e);}); // tmb da assim
    const fase3 = await espera("Fase 3", tempoAleatorio(1, 5));
    console.log(fase3);
    console.log("Acabou");
  } catch (e) {
    // equivale ao catch do .catch
    console.log(e);
  }
}

executa();

// estados:
// Pending - promise a ser executada (nao useri nem then nem await), chamar antes de estar acabada!
// Fullfilled - resolvida
// Rejected - rejeitada
