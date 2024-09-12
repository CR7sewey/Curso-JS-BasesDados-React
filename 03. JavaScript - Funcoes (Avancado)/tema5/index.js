// Funções de callback

/* 
Funcoes executadas quando uma ação é finalizada
Utilidade: por exemplo queremos fazer requisições a uma api, ou descarregar dados
num JSON e não sabemos ao certo quanto tempo demora, ou queremos descarregar daddos
numa base de dados e o processo não é imediato. Em suma, processos que levam
x tempo a ocorrer.
Uso então funções de callback
Mais à frente vamos ver uma melhoria a este tipo de funções
*/

function rand(min = 1000, max = 10000) {
  return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) {
  setTimeout(function () {
    // vai demorar pelo menos 1s a ser executado
    console.log("1");
    if (callback) {
      callback();
    }
  }, rand());
  console.log("f1");
}

function f2(callback) {
  setTimeout(function () {
    // vai demorar pelo menos 1s a ser executado
    console.log("2");
    if (callback) {
      callback();
    }
  }, rand());
  console.log("f2");
}

function f3(callback) {
  setTimeout(function () {
    // vai demorar pelo menos 1s a ser executado
    console.log("3");
    if (callback) {
      callback();
    }
  }, rand());
  console.log("f3");
}

f1(() => {
  f3(() => {
    console.log("AQUI");
  });
});

/*
f1(function () {
  f2(function () {
    f3(function () {
      console.log("Vamos Começar!");
    });
  });
});
*/

/*
function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback() {
    console.log('Como é que é');
}


f1(f1Callback); // passo funcao como parametro
*/
