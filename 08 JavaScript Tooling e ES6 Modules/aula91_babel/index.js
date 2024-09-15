// compatibilidade dos codigos com navegadores mais antigo
// site - can I use - ve o que podemos usar em cada navegador
// ex: const nao é suportado do 6 ao 10 do Internet explorer
// como fazer para resolver isso? - Podemos usar o babel (babeljs.io)
// como se fosse um tradutor de codigo 
// vamos usar o babel - para instalar é (terminal)
/*
npm init -y
npm install --save-dev @babel/cli @babel/preset-env @babel/core (colocado no dev dependencies)
*/

class Pessoa{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this.name
    }

    set name(valor) {
        this.name = valor;
    }

    anoNascimento() {
        return 2024 - this.age;
    }
}

// para converter para script mais moderno
// npx babel index.js -o bundle.js --presets=@babel/env
// adicionei ao packge.json     "babel": "babel ./index.js -o ./bundle.js --presets=@babel/env -w"
// assim ele recompila automaticamente o bundle sempre que alterar o index.js
// para isso preciso ainda de no terminal fazer: npm run babel

// na vdd nao usamos isto
// usamos o webpack que usa o babel