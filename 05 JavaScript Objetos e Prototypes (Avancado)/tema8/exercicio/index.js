function ValidaCPF(cpf) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    configurable: false,
    get: function () {
      return cpf.replace(/\D+/g, "");
    },
    set: function (valor) {
      return valor.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.criaDigit = function (cpfPartial, digit = "second") {
  cpfArray = cpfPartial.split(""); // Array.from(cpfPartial)
  let maxNumber = cpfArray.length + 1;
  const soma = cpfArray
    .map((value, index) => {
      return Number(value) * (maxNumber - index);
    })
    .reduce((acumulator, value) => {
      // podia fazer logo tudo no reduce
      return acumulator + value;
    }, 0); //11    //11
  const digitDigit = digit === "first" ? maxNumber + 1 : maxNumber;
  const fD = digitDigit - (soma % digitDigit);
  return fD < 9 ? String(fD) : "0";
};

ValidaCPF.prototype.concatenarCPF = function (cpf, value) {
  return cpf + value;
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

ValidaCPF.prototype.valida = function () {
  // VALIDACOES INICIAIS
  if (typeof this.cpfLimpo === "undefined") return false; // this.cpfLimpo
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfPartial = this.cpfLimpo.slice(0, -2);

  const fD = this.criaDigit(cpfPartial, "first");
  const cpf_fD = this.concatenarCPF(cpfPartial, fD);
  const sD = this.criaDigit(cpf_fD);
  const cpf_fD_sD = this.concatenarCPF(cpf_fD, sD);
  return this.cpfLimpo === cpf_fD_sD;
};

const cpf = new ValidaCPF("620.349.660-07");
const valido = cpf.valida();
console.log(valido);
