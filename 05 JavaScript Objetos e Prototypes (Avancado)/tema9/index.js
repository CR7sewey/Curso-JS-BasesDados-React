// Polimorfismo - metodos comportarem de forma diferente entre filhos e pais

// superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
  /*Object.defineProperty(this, 'saldo', {
        enumerable: true,
        configurable: false,
        get: function() {
            return `O seu saldo é ${saldo}`;
        },
    }
    )*/
}

Conta.prototype.levantar = function (valor) {
  if (this.saldo - valor < -3000) {
    console.log("Saldo insuficiente!");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

// getter
Conta.prototype.verSaldo = function () {
  console.log(`O seu saldo é €${this.saldo}`);
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.construtor = ContaPoupanca;

ContaPoupanca.prototype.levantar = function (valor) {
  if (this.saldo - valor < 0) {
    console.log("Saldo insuficiente!");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.construtor = ContaCorrente;

ContaCorrente.prototype.levantar = function (valor) {
  if (this.saldo - valor < -this.limite) {
    console.log("Saldo insuficiente!");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const cp1 = new ContaPoupanca("Santander", "Ricardo", 2000);
cp1.levantar(1000);
console.log(cp1);

console.log("------------");

const cc1 = new ContaCorrente("Santander", "Ricardo", 5000, 2000);
cc1.levantar(10000);
console.log(cc1);
