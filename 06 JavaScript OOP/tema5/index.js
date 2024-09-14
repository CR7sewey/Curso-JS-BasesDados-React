// Exercicio - O CPF é válido? true or false

class ValidarCPF {
  constructor(cpf) {
    /*Object.defineProperty(this,'cpfLimpo', {
            writable: false,
            enumerable:false,
            configurable:false,
            value: cpf.replace(/\D+/g, ''),
        })*/
    this.cpfLimpo = cpf.replace(/\D+/g, "");
  }

  static criaDigit(cpfPartial, digit = "second") {
    let cpfArray = cpfPartial.split(""); // Array.from(cpfPartial)
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
  }

  valida() {
    if (typeof this.cpfLimpo === "undefined") return false; // this.cpfLimpo
    if (this.cpfLimpo.length !== 11) return false;
    if (ValidarCPF.isSequencia(this.cpfLimpo)) return false;

    const cpfPartial = this.cpfLimpo.slice(0, -2);

    const fD = ValidarCPF.criaDigit(cpfPartial, "first");
    const cpf_fD = cpfPartial + fD;
    const sD = ValidarCPF.criaDigit(cpf_fD);
    const cpf_fD_sD = cpf_fD + sD;
    return this.cpfLimpo === cpf_fD_sD;
  }

  static isSequencia(cpf) {
    return cpf[0].repeat(cpf.length) === cpf;
  }
}

const c1 = new ValidarCPF("705.484.450-52");

console.log(c1.valida());
