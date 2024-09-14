

/*
class FormularioCadastro {
    constructor(nome,sobrenome,cpf,usuario,senha,senha2) {
        this.nome = nome;
        this.sobrenome= sobrenome;
        this.cpf = cpf;
        this.usuario =usuario;
        this.senha = senha;
        this.senha2 = senha2;
        this.eventos();
    }

    eventos() {
        
    }

    validaUsuario() {
        if (this.usuario.length > 12 || this.usuario.length <3) {
            return false;
        }
        // ... cena numeros/letras
        return true;
    }

    validaSenha() {
        if (this.senha.length > 12 || this.senha.length <6) {
            return false;
        }
        // ... cena numeros/letras
        return true;
    }

    static validaExiste(...valor) {
        for (let i in valor){
            if (!i) {
                return false;
            }
        }
        return true;
    }

    validarCPF() {
        const v = new ValidarCPF(this.cpf);
        return v.valida();
    }

    validaTudo() {
        const tudo = [this.nome,this.cpf,this.senha,this.sobrenome,this.usuario];
        if (!FormularioCadastro.validaExiste(tudo)) {
            return false;
        };
        if (!this.validaSenha()) {
            return false;
        };
        if (!this.validaUsuario()) {
            return false;
        };

        return true;

    }


}*/

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
            this.formulario.addEventListener('submit', (e) => {
                this.handleSubmit(e);
                const camposValidos = this.camposSaoValidos();
                const senhasValidas = this.senhasValidas();
                if (camposValidos && senhasValidas) {
                    alert('Formulario enviado');
                    this.formulario.submit(); // envia forms
                }
        });
    }

    handleSubmit(e) {
        return e.preventDefault();
    }

    camposSaoValidos() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} nao pode estar em branco`);
                valid = false;
            }
            if (campo.classList.contains('cpf')){
                if (!this.validarCPF(campo)) {
                    valid = false;
                }
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validarUsuario(campo)) {
                    valid = false;
                }

            }
        }
        return valid;
    }

    senhasValidas() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        const pass1 = this.formulario.querySelector('.senha');
        const pass2 = this.formulario.querySelector('.senha2');

        if (!this.validarSenha(pass1)) {
            valid = false;
        }
        if (!this.validarSenha(pass2)) {
            valid = false;
        }
        if (!this.validarSenhaIguais(pass1,pass2)) {
            this.criaErro(pass1, `Doesn't match with second password!`);
            this.criaErro(pass2, `Doesn't match with first password!`);
            valid = false;
        }

        return valid;
        }

        
        
    

    validarCPF(cpf) {
        const v = new ValidarCPF(cpf.value);
        if (!v.valida()) {
            this.criaErro(cpf, `CPF invalido`);
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);

    }

    validarUsuario(campo) {
        let valid = true;
        if(campo.value.length<3 || campo.value.length>12 ) {
            this.criaErro(campo, `Username needs to have a length between 3 and 12!`);
            valid = false;
        }
        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, `Username can only have numbers and letters!`);
            valid = false; 
        }

        return valid;
    }

    validarSenha(campo) {
        let valid = true;
        if(campo.value.length<3 || campo.value.length>12 ) {
            this.criaErro(campo, `Senha needs to have a length between 6 and 12!`);
            valid = false;
        }
        return valid;
    }

    validarSenhaIguais(senha1,senha2) {
        if (senha1.value !== senha2.value) {
            return false;
        }
        return true;
    }

} 

const valida = new ValidaFormulario();
valida.eventos();



