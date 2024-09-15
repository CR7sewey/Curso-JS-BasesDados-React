import ValidarCPF from "./ValidarCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999 ) {
        return String(Math.floor(Math.random()*(max-min)+min));
    }

    gerarDigitos() {
        let cpfPartial = this.rand();
        while (ValidarCPF.isSequencia(cpfPartial)) {
            cpfPartial = this.rand();
        }
        const primeiroDigito = ValidarCPF.criaDigit(cpfPartial,'first');
        let cpfPartial2 = cpfPartial + primeiroDigito;
        const segundoDigito = ValidarCPF.criaDigit(cpfPartial2);
        cpfPartial2 += segundoDigito;
        return this.formatado(cpfPartial2);
    }

    formatado(cpf) {
        return (cpf.slice(0,3) +'.'+cpf.slice(3,6)+'.'
        +cpf.slice(6,9)+'-'+cpf.slice(9,11))
        ;
    }
}