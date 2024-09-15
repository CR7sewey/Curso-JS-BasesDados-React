const nome = 'Mike';
const sobrenome = 'Carvaloh';
const idade = 24;
export const alcunha = 'UUUU';
const souPrivada = 'OOI';


// default -> padrao
export default function soma(x,y) {
    return x+y;
}

export class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {nome,sobrenome as sb,idade,soma};

//export {nome as default, sobrenome};