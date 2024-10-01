## Passos

#### Explore Data

Ir a data.js e explorar o array

#### Count State Value

No App.jsx, criar um count valor de estado a (useState hook). Meter o valor default a 1.

#### Form

Criar um elemento form que contem um input de number e um button de submit. Anexar
o vlaor de estado cout ao input ao usar o prop valur, e criar um handleChange para
fazer o update do valor de estado do count quando ha uma mudança de input. Meter
o valor minimo (min) a 1, e o maximo (max) a 8, e o passo (step) como 1.

#### Importar Text e State Value

Importa o array de text de data.js e criar um valor de estado "text" (useState hook).
Meter o valor default como um array vazio.

#### OnSubmit

Anexar um evento onSubmit ao form, e criar um handleSubmit para lidar com a submissao
do form. Dentro do handleSubmit, prevenir o comportament padrao de submissao ao usar o
event.preventDefault(). Obter o valor de estado count, e usar para criar um novo array
ao extrair os primeiros n paragrafos do array text (quando n é o valor de estado de count) (com array.slice()).
Igualar o valor de estado de text igual ao novo array;

#### Renderizar Texto

Renderizar o valor de estado text debaixo do form. Vocês vão precisar de usar o
metodo map para iterar sobre o array e renderizar cada paragrafo. Usar o nanoid (biblioteca)
para gerar ids unicos para cada paragrafo.

Em suma, o flow da pp vai ser assim:

- No App.jsx, criar um "count" comos valor de estado (useState hook).
- Cria rum elemento form que contem um input number e um button de submit.
- Importat o array de text da data.js e criar um valor de estado "text" (useState hook).
- Anexar o evento onSubmit ao form, e criar a funcao handleSubmit para lidar com
  a submissao do form.
- Renderizar o valor de estado "text" por debaixo do form com o uso do metodo map
  para iterar sobre o array e renderizar cada paragrafo com um id unico.

#### Array.slice()

Exemplo:

```js
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const slicedFruits = fruits.slice(1, 4); // copia elementos 1, 2, and 3 (but not 4) para um novo array

console.log(slicedFruits); // ['banana', 'cherry', 'date']
```

#### nanoid

nanoid é uma biblioteca pequena, rapida, e segura para gerar IDs unicos no JS. É como se fosse
um identificador.

A bibliotexa gera IDs random que consitem numa combinação de uppercase e lowercase caracteres (numeros e letras). O tamanho default é de 21 chars.

Exemplo:

```sh
npm i nanoid
```

```js
import { nanoid } from "nanoid";

const id = nanoid(); // Generates a 21-character random ID

console.log(id); // Output: "Uakgb_J5m9g-0JDMbcJqL"
```
