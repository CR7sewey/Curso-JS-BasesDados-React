// Herança

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado === true) {
      console.log("Já está ligado!!");
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (this.ligado === false) {
      console.log("Já está desligado!!");
      return;
    }
    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome); // tipo call, spur() python, super() java
    this.cor = cor;
  }
}

const s1 = new Smartphone("Iphone", "preto");
s1.ligar();
console.log(s1);
