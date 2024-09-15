import GeraCPF from './assets/modules/GeraCPF.js'; // webpack passar pelo index e chegar no GERA E VALIDAR CPF
import './assets/css/style.css';

// IIFE - invoked function expression
(function () {
    const div = document.querySelector('.cpf-gerado');
    const span = div.querySelector('.resultado');
    const btn = div.querySelector('.btn');

    function dameUmCPF() {
        const obj = new GeraCPF();
        return obj.gerarDigitos();
    }
    span.innerHTML = dameUmCPF();

    btn.addEventListener('click',(e) => {
        span.innerHTML = dameUmCPF();
    })


})();

