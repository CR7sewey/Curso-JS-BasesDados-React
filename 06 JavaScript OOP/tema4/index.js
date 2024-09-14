// Metodo de Instancia e Estaticos
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // MEtodo de instancia
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // MEtodo esstatico, nao tenho acesso aos dados da instancia
  static trocaPilha() {
    // para todos os controles
    console.log("OIOIOI");
    console.log(this);
  }
  static instanciar(tv) {
    return new ControleRemoto(tv);
  }
}

const c1 = new ControleRemoto("TV-LG");
c1.aumentarVolume();
//c1.trocaPilha() //erro
ControleRemoto.trocaPilha();
const c2 = ControleRemoto.instanciar("ASUS");
console.log(c1, c2);
