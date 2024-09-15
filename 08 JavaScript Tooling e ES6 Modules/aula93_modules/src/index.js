//import {nome as nome2,sb,idade,soma} from './modulo1';
//import { alcunha, Pessoa } from './modulo1';
//import * as MeuModulo from './modulo1';
const nome = 'Ze'; // colisao de varivei
import qualquerNome, {nome as nome2,sb,idade,alcunha} from './modulo1'; //default no modulo1
console.log(nome2,sb,idade,qualquerNome(1,2),alcunha);
//console.log(MeuModulo.nome,MeuModulo.sb,qualquerNome(1,2))

const p = new MeuModulo.Pessoa(MeuModulo.nome,MeuModulo.sb);
console.log(p);

// LER DOC, ha muitas formas de fazer