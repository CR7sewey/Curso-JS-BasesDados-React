## Passos

- nao pensar no CSS, checkout example image

## Importar Data

In App.jsx, importar a data (de data.js) para ser renderizada como um array de
objetos. Cada objeto deve representar uma pessoa e conter propriedade como
name, age, imagem.

## Criar Variavel de Estado

De seguida, meter a data com variavel de estado a usar o useState hook. Isto vai permitir
que a data seja modificada e que essas mudanças ocorram automaticamente no output renderizado.

## Iterar e Renderizar

Mostrar o numero de itens na lista a usar o tamanho da variavel de estado. Esta informacao
pode ser mostrada a usar simplesmente texto ou ser adicionada a uma messagem ou a um elemento de heading (<h1>).

Para renderizar a lista de pessoas, iterar sobre a data usando o metodo map. Para cada item no array,
renderizar um elemento de image. Adicionalmente, renderizar o o nome da pessao e idade.

Criar uma componente List para guardar os itens renderizados. Este componente pode
ser uma simples div que contem uma lista de Pessoa.

Criar um componente Person para renderizar a informação para cada pessoa.
Este componente deve receber a data da pessoa como props e renderizar a image, name e age.

#### Clear List

No App.jsx, adicionar um button para limpar a lista, e montar uma funcionalidade
definindo uma funcao que faz reset da variavel de estado para um array vazio.

No geral:

- Importar a data que queremos para renderizar no App.jsx
- Colocar a data como uma variavel de estado com useState.
- Usar o metodo map para iterar sobre a data e renderizar uma Person (componente) para cada pessoa.
- Cada componente Person deve renderizar uma imagem com um prop para controlar a largura (width),
  o nome da pessoa e a idade.
- Criar a componente List que contem os itens renderizados.
- Criar um button com a funcionalidade de limpar a lista.
- Mostrar o numero de itens na lista e usar o tamanaho (length) da variavel de estado.
