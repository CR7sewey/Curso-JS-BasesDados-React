# O que é o React?

## Explicação sucinta:

- Basicamente, o React é uma biblioteca de JavaScript para construir interfaces
  para os utilizadores.
- Desenvolvido pelo Facebook/Meta em 2013
- Já traz uma serie de ferramentas configuradas (servidor, webpack, bundle, babel etc)

O React é basicamente uma estrutura de componentes - podemos pensar em componentes
pedaços independentes de interfaces de utilizador
Estes componentes podem variar, desde pequenos elementos HTML como botões,
a estruturas mais complexas. A ideia é que estes componentes interajam entre si:
Então por exemplo posso ter um componente que representa a minha página de login,
outro que represente a minha página de produtos, outro que represente a minha
página inicial. Posso ainda ter componentes que são renderizados a partir de outros,
ou seja, como componentes pai e filho. Exemplo: eu tenho produtos, e quero mostrar
alguns na página inicial, e todos na de produtos. Então, posso reutilizar este componente
de nome Produtos tanto para a página inicial como para a página de produtos. Ou seja,
funciona praticamnte como blocos de legos.

## Então, quais são as vantagens dos componentes:

- independentes (ex: mudança de lógica num componente não quebra toda a aplicação)
- reutilizaveis (portanto, menos código)
- velocidade (usa o virtual DOM, ou seja, só o componente a ser utilizado/update é afetado, ou seja só este é renderizado)
- podemos ter tantos componentes quantos queremos

## Para o Curso de React Precisamos:

- Browser;
- VS Code;
- Terminal;
- Node.js (url: https://nodejs.org - instal a versao LTS); no terminal, ver node --version para saber se já está instalado

## Para instalar o React (no terminal):

- npx create-react-app 01-fundamentos (https://react.dev/)
- npm create vite@latest (https://vitejs.dev/guide/) -> melhor

(
npm - node package manager (vem com o node) e permite instalar bibliotecas externas
npx - em vez de instalar na nossa maquina, só executamos!
)

Nesta secção, vamos usar create react app, mas no futuro vamos usar o vite! (
Praticamente iguais!! - vite é mais rapido, eficiente e usa a forma nativa de importar
os módulos ES
)

Portanto, vamos criar a nossa primeira aplicacao React:
No terminal (pode ser o do VS Code), na pasta que queremos (cd **dir**) correr O

1: comando npx create-react-app@latest 01-fundamentos

2: cd **dir**

3: npm start

4: go to localhost:3000

# Fundamentos de React

## Estrutura de pastas

- node_modules: contém todas as dependencias requeridas pela aplicação. As principais estão listadas no package.json

- public:
  Contém todos os ficheiros estáticos incluuindo o index.html (template da pagina)

  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - toda a nossa aplicação

- src
  É o cerebro da nossa aplicação. É aqui onde nós vamos colocar todo o nosso trabalho. Em src/index.js é o ponto de entrada do JavaScript, onde o Dom Virtual é carregado no index.html

- .gitignore
  Espcifica que arquivos o nosso controle de versão deve ignorar

- package.json
  Todo projeto Node.js tem um package.json e ele contém informações sobre nosso projeto, por exemplo, lista de dependências e scripts. Nos scripts, o start é o que nós correpos para correr a aplicacao em ambiente de desenvolvimento
  Ver node_modules para ver dependencias dentro de dependencias

- package-lock.json
  Um resumo de toda a árvore de dependências

## Remover Codigo "Lixo"

- Remover: App.test.js, logo.svg, reportWebVitals.js, setupTests.js
- Remover: tudo o relacionado ao logo e reportWebVitals
- Limpar todo o return da App
- Deixar só o relevante no index.js

- Nota: o index.js é como se fosse o pai da aplicação, no fundo é ele que comunica
  diretament com o nosso html e carrega para la o "DOM". Este, vai buscar tudo à App.js,
  e aí sim muitas vezes vamos ter as várias componentes (ESTRUTURA)

- shortcuts settings/keyboard shortcuts (útil)

## Primeiro Componente

- criar folder components
- criar ficheiro Agradecimento.js
- Código:

```js
function Agradecimentos() {
  return <h2>Olá, este é o meu primeiro componente</h2>;
}

// arrow function also works

const Agradecimentos = () => {
  return <h2>Olá, este é o meu primeiro componente</h2>;
};
```

- como uma função em JS/Node
- podiamos tambem fazer class components (não muito usado atualmente)
- começa com letra maiúscula
- tem de returnar um JSX (é um html so que escrito em JS -> mais poderoso, visto
  que permite fazer loops, ifs entre outros)
- Fechar sempre quando chamamos o componente <Greeting/>

## Componente Padrão

```js
// imports or logic

const Agradecimentos = () => {
  return <h2>Olá, este é o meu primeiro componente</h2>;
};
export default Agradecimentos; // para podermos usar noutros componentes/modulos - ES6 - vamos ver mais tarde
```

## Componente Root (único)

index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

function Agradecimentos() {
  return <h2>Olá, este é o meu primeiro componente</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />); // ver html - injetar Agradecimentos no root do HTMl
```

## Bugs

Se por alguma razão houver um erro no terminal, pode ser só uma falha no servidor

```
Module not found: Error: Can't resolve 'path/index.js'
```

Restart o servidor

- CTRL + C (parar o server)
- "npm start" (run o dev server)

## Extensoes e settings.json

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier -> UTIL
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter) (settings -> default formatter)

settings.json

```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "prettier.semi": false,
```

- Emmet (default) ex: h2.my-class

settings.json

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
```

- ES7 utilidades (ES7 React/Redux/GraphQL/React-Native snippets) -> UTIL
  - rafce (arrow function com export)
  - rfce (regular function com export )
  - = ao nome do file
  - react auto import
    - uncheck
    - React Utilidades › Settings: Import React On Top

## Primeiro Componente em Detalhe e relacao com JS/node (Vanilla JS)

- Letra Capital
- Deve returnar algo (objetivo do componente)
- JSX syntax (returna html)
  - torna muito mais facil e poderosa o uso do html
  - chama uma funcao por debaixo dos panos

index.js

```js
const Agradecimentos = () => {
  return React.createElement("h2", {}, "Olá mundo"); // poderiamos fazer assim, tal como no vanilla fariamos  document.createElement('h2') ...
};
```

```js
function Agradecimentos() {
  return (
    <div>
      <h2>Olá mundo</h2>
    </div>
  );
}

const Agradecimentos = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Olá mundo")
  );
  // const div = document.createElement('div')
  // const h2 = document.createElement('h2')
  // h2.innerText = "Olá mundo"
  // div.appendChild(h2)
};
```

## Regras JSX

- retornar um unico elemento (elemento pai)

  - semantica: section/article
  - Fragmento: agrupar elementos sem adicionar nodos extra

```js
return <React.Fragment>...rest of the return</React.Fragment>;

// sversão curta (e melhor)

return <>...rest of the return</>;
```

- Convenção de nomes: camelCase

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// no html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className em vez de class
- onClick em vez de onclick
- etc

```js
return <div className="valor">Ola</div>;
```

- Fechar todos os elementos

```js
return <img />;
// ou
return <input />;
```

- formatação
- abrir tag na mesma linha como returno ou ()

```js
function Agradecimentos() {
  return (
    <>
      <div className="valor">
        <h3>Olá Mundo</h3>
        <ul>
          <li>
            <a href="#">Olá mundo 2</a>
          </li>
        </ul>
      </div>
      <h2>Olá mundo</h2>
      <input type="text" name="" id="" />
    </>
  );
}
```

## Componentes aninhados

```js
function Agradecimentos() {
  // Pai
  return (
    <div>
      <Pessoa />
      <Messagem />
    </div>
  );
}

const Pessoa = () => <h2>Cristiano Ronaldo</h2>; // Filho
const Messagem = () => {
  return <p>Sou o melhor do mundo!</p>;
};
```

- Portanto a ideia dos componentes é ter um component principal (App) que aninha
  outros componentes que consequentemente podem aninhar outros e assim sucessivamente!
- injetamos este DOM na div do index.html (id root)

## React Developer Tool

- instalar extensao no browser
- ver Components no navegador

# Primeiro Projeto - Melhores Vendas Amazon

## Lista de Livros/BookList

- estrutura: depois vamos restruturar

```js
import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default BookList;

const Book = () => {
  return (
    <article>
      <Imagem />
      <Titulo />
      <Autor />
    </article>
  );
};

const Imagem = () => <h2>imagem</h2>;
const Titulo = () => {
  return <h2>Titulo do Livro</h2>;
};
const Autor = () => <h4>Autor</h4>;
```

- No index.js colocar root.render(<BookList />);

- Pesquisar no browser - 'amazon best selling books'
  [Amazon Best Sellers](https://www.amazon.com/Best-Sellers-Books/zgbs/books/)
- escolher um livro
- copiar imagem, titulo e autor

```js
import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Imagem />
      <Titulo />
      <Autor />
    </article>
  );
};

const Imagem = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Factos sobre a mente humana"
  />
);
const Titulo = () => {
  return <h2>Factos sobre a mente humana</h2>;
};
const Autor = () => <h4>Jordan Moore</h4>;
```

## CSS

- "criar" index.css no src

```css
* {
  /* toda o html */
  margin: 0; /* margem */
  padding: 0; /* padding */
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f1f5f8;
  color: #222;
}
```

- importar css file e adicionar classes

```js
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Imagem />
      <Titulo />
      <Autor />
    </article>
  );
};
```

- todo o css

```css
.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}
.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}
.book img {
  width: 100%;
  object-fit: cover;
}
.book h2 {
  margin-top: 1rem;
  font-size: 1rem;
}
```

## Imagens Locais

- Imagens externas - basta apenas um url
- Imagens Locais (src folder)

- criar images folder em src
- copy/paste imagem

```js
import book1 from "./images/book-1.jpg";

const Imagem = () => <img src={book1} alt="Factos sobre a mente humana" />;
```

## JSX - CSS (inline styles)

- {} in JSX significat introduzir variavel
- valor é um objeto com pares chave/valor

```js
const Autor = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Jordan Moore
  </h4>
);
```

- regras de css ainda se aplicam (inline vs external css)

```css
.book h4 {
  /* nao funciona */
  color: red;
  /* funciona */
  letter-spacing: 2px;
}
```

- Librarias externas usam inline css (tailwind, bootstrap),

- alternative option

```js
const Autor = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

## JSX - Javascript

- Refatorar a um único componente

```js
const Book = () => {
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Factos sobre a mente humana" />
      <h2>Factos sobre a mente humana</h2>
      <h4>Jordan Moore </h4>
    </article>
  );
};
```

```css
.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  letter-spacing: 2px;
}
```

- {} no JSX significa que procura uma variavel no proprio JS
- valor interno dever ser uma expressiao (return value)

```js
const autor = "Jordan Moore";
const Book = () => {
  const titulo = "Interesting Facts For Curious Mindssssss";
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>{titulo}</h2>
      <h4>{autor.toUpperCase()} </h4>
      {/* COMENTARIO */}
      <p>{6 + 6}</p>
    </article>
  );
};
```

## Props - Initial Setup

- refactorar

```js
const autor = "Jordan Moore";
const titulo = "Factos sobre a mente humana";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

```js
// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// arguments
someFunc("trabalho", "developer");
```

```js
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={titulo} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
      {console.log(props)}
    </article>
  );
};
```

- objeto props (convençao)

- passar como pares chave/valor
- se o prop existir vai returnar um valor, senao nenhum valor

```js
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};
```

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        titulo="Factos sobre a mente humana"
        autor="Jordan Moore"
        imagem={book1}
        numero={12}
      />
      <Book />
    </section>
  );
}

export default BookList;

const Book = (props) => {
  const titulo = props.titulo ?? "Titulo";
  return (
    <article className="book">
      <img src={props.imagem} alt="Factos sobre a mente humana" />
      <h2>{titulo}</h2>
      <h4>{props.autor?.toUpperCase() ?? "Autor"} </h4>
      {/* COMENTARIO */}
      <p>{props.numero}</p>
    </article>
  );
};
```

## Props - Setup dinamico

- Vamos supor que iamos buscar os dados a uma base de dados, ou algo do tipo.
- No caso vamos contruir um array de objetos com os dados!

```js
const primeiroBook = {
  autor: "Jordan Moore",
  titulo: "Factos sobre a mente humana",
  img: book1,
};
const segundoBook = {
  autor: "James Clear",
  titulo: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        titulo={primeiroBook.titulo}
        autor={primeiroBook.autor}
        imagem={primeiroBook.img}
        numero={12}
      />
      <Book
        titulo={segundoBook.titulo}
        autor={segundoBook.autor}
        imagem={segundoBook.img}
        numero={12}
      />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  const titulo = props.titulo ?? "Titulo";
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
```

## Aceder aos Props - Várias Abordagens

- Destruturar (objeto)
  [JS Nuggets - Destructuring (object)](https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=8&t=1s)

- destruturar como no Vanilla JS
- puxar as propriedades
- nao é preciso referenciar o objeto

```js
const pessoa = {
  nome: "Miguel",
  trabalho: "developer",
  localizacao: "Coimbra",
};

console.log(pessoa.nome);
const { nome, trabalho } = pessoa;
console.log(trabalho);
```

- destruturar dentro do componente

```js
const Book = (props) => {
  const { imagem, titulo, autor } = props;
  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
    </article>
  );
};
```

- destruturar em parametro de funcao (props)

```js
const Book = ({ imagem, titulo, autor }) => {
  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
    </article>
  );
};
```

## Children Prop

- tudo o que renderizamos entre componentes
- Basicamente é o equivalente a passar um JSX como props
- melhorar isto - Context API e Redux
- pode ser colocado em qualquer lugar do JSX

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        autor={firstBook.author}
        titulo={firstBook.title}
        imagem={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        autor={secondBook.author}
        tituço={secondBook.title}
        image={secondBook.img}
      />
    </section>
  );
}

const Book = ({ imagem, titulo, autor, children }) => {
  // rest of the logic
};
const Book = (props) => {
  const { imagem, titulo, autor, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={imagem} alt={title} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
      {children}
    </article>
  );
};
```

```css
@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
.book p {
  margin: 1rem 0 0.5rem;
}
```

## Lista Simples

- [Javascript Nuggets - Map ](https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=1)

- refatorar

```js
const books = [
  {
    autor: "Jordan Moore",
    titulo: "Factos sobre a mente humana",
    imagem: book1,
  },
  {
    autor: "James Clear",
    titulo: "Atomic Habits",
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

function BookList() {
  return <section className="booklist"></section>;
}

const Book = (props) => {
  const { imagem, titulo, autor } = props;

  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
    </article>
  );
};
```

- nao da para renderizar objetos diretamente no React

```js
function BookList() {
  return <section className="booklist">{books}</section>;
}
```

- map - cria um array chamando uma funcao para cada elemento do array.

```js
const nomes = ["Miguel", "João", "Ronaldo"];
const novosNomes = nomes.map((nome) => {
  console.log(nome);
  return <h1>{nome}</h1>;
});

function BookList() {
  return <section className="booklist">{novosNomes}</section>;
}
```

## Lista Correta

- remove names and newNames

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        return (
          <div>
            <h2>{book.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
```

- renderizar componente
- passar propriedades uma por uma

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { imagem, titulo, autor } = book;
        return <Book imagem={imagem} titulo={titulo} autor={autor} />;
      })}
    </section>
  );
}
```

- ou então <Book {...book} />

## Key Prop

- normalmente é o id

```js
const books = [
  {
    autor: "Jordan Moore",
    titulo: "Factos sobre a mente humana",
    imagem: book1,
  },
  {
    autor: "James Clear",
    titulo: "Atomic Habits",
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { imagem, titulo, autor, id } = book;
        return <Book book={book} key={id} />;
      })}
    </section>
  );
}
```

- vocês vão ver o indice, mas não é avisado se a lista está a mudar

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        console.log(book);
        const { imagem, titulo, autor, id } = book;
        return <Book book={book} key={index} />;
      })}
    </section>
  );
}
```

## Passar o objeto inteiro

- renderizar componente
- passar o objeto inteiro
- Desestruturar (objecto)
  [JS Nuggets - Destructuring (object)](https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=8&t=1s)

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { imagem, titulo, autor } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { imagem, titulo, autor } = props.book;

  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{title}</h2>
      <h4>{autor} </h4>
    </article>
  );
};
```

- alternativa

```js
const Book = ({ book: { imagem, titulo, autor } }) => {
  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
    </article>
  );
};
```

## Como eu prefiro!

- usar o opreador spread (...) - copiar valores
- Spread Operator
- [JS Nuggets - Spread Operator](https://www.youtube.com/watch?v=4Zyr5a3m0Fc&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=10)

```js
const nomes = ["Miguel", "João", "Ronaldo"];
const novosNomes = [...nomes, "Maria"];
console.log(nomes);
console.log(novosNomes);
const umObjecto = {
  nome: "Miguel",
  trabalhador: "developer",
};
// COPY NOT A REFERENCE !!!!
const novoObjecto = { ...umObjecto, localizacao: "Coimbra" };
console.log(umObjecto);
console.log(novoObjecto);
```

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { imagem, titulo, autor } = props;
  return (
    <article className="book">
      <img src={imagem} alt={title} />
      <h2>{titulo}</h2>
      <h4>{autor} </h4>
    </article>
  );
};
const Book = ({ img, title, author }) => {
  // resto do codigo
};
```

## Events - Fundamentos

- Vanilla JS

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // aceder ao evento no objeto
  // fazer algo quando o evento dispara
});
```

- abordagem semelhante
- elemento, evento, funcao

```js
const EventExamples = () => {
  const lidarComClique = () => {
    alert("lidar com botao");
  };
  return (
    <section>
      <button onClick={lidarComClique}>click me</button>
    </section>
  );
};
```

- [React Events](https://reactjs.org/docs/events.html)
- ideia semelhante à outra
- mais comum
  - onClick (click events)
  - onSubmit (submit form)
  - onChange (input change )

```js
function BookList() {
  return (
    <section className="booklist">
      <EventosExemplos />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventosExemplos = () => {
  const formInput = () => {
    console.log("handle form input");
  };
  const botaoClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h2>Forma Tipica</h2>
        <input
          type="text"
          name="example"
          onChange={formInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={botaoClick}>click me</button>
    </section>
  );
};
```

## Evento Objeto e Submissao de Formularios

```js
const EventosExemplos = () => {
  const formInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const botaoClick = () => {
    alert("handle button click");
  };
  const formSubmissao = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={formSubmissao}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={formInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={botaoClick}>click me</button>
    </section>
  );
};
```

- Form Alternativa

```js
<button type="submit" onClick={formSubmissao}>
  submit form
</button>
```

## Alternativa

- abordagem alternativa
- passar uma funcao anonima (arrow function)
- menos código

```js
const EventosExemplos = () => {
  return (
    <section>
      <button onClick={() => console.log("Ola!")}>click me</button>
    </section>
  );
};
```

- podemos tambem aceder ao objeto de evento

```js
const EventosExemplos = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={() => console.log("you clicked me")}>click me</button>
    </section>
  );
};
```

## Prop Drilling

- Flow de data no React - Podemos apenas passar props de pai para filhos
- alternativas: Context API, Redux, outras bibliotecas de estado

```js
function BookList() {
  const algumValor = "MiguelERonaldo";
  const mostrarValor = () => {
    console.log(algumValor);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} mostrarValor={mostrarValor} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { imagem, titulo, autor, mostrarValor } = props;

  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <button onClick={mostrarValor}>click me</button>
      <h4>{autor} </h4>
    </article>
  );
};
```

## Exemplo mais complexo

- initial setup
- criar getBook function no booklist
- aceita id como um argumento e acha o livro
- [Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
- passar a funcao para o componente Book e invocar no botao
- no componente Book destrutarar id e funcao
- invocar a funcao quando o utilizador clica no botao, passar o id
- objetivo: ver o mesmo livro na consola

```js
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { imagem, titulo, autor, getBook, id } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      {/* nao vai funcionar pois estamos a executar a funcao e nao a passar uma referencia */}
      <button onClick={getBook(id)}>{titulo}</button>
      <h4>{autor}</h4>
    </article>
  );
};
```

- correcao: opcao 1
- primeira opcao - montar um wrapper (getSingleBook)

```js
const Book = (props) => {
  const { imagem, titulo, autor, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <button onClick={getSingleBook}>{titulo}</button>
      <h4>{autor}</h4>
    </article>
  );
};
```

- correcao: opcao 1
- segunda opcao - montar um wrapper como funcao anonima

```js
const Book = (props) => {
  const { imagem, titulo, autor, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <button onClick={() => getBook(id)}>{titulo}</button>
      <h4>{autor}</h4>
    </article>
  );
};
```

## Import and Export

- remover todo o código de getBook

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { imagem, titulo, autor } = props;

  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>

      <h4>{autor} </h4>
    </article>
  );
};
```

- criar dois ficheiros no src (books.js e Book.js)
- cortar o array de books do index.j
- adicionar a books.js

books.js

```js
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
```

- Duas formas de exportar:

  - com nomes exportados então nomes devem fazer match
  - com exports default, podemos renomear mas apenas um por file

- nomes exportados

```js
export const books = [
  {
    id: 1,
    autor: "Jordan Moore",
    titulo: "Factos sobre a mente humana",
    imagem: book1,
  },
  {
    id: 2,
    autor: "James Clear",
    titulo: "Atomic Habits",
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];
```

index.js

```js
import { books } from "./books";
```

- Export default

```js
const Book = (props) => {
  const { imagem, titulo, autor } = props;

  return (
    <article className="book">
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>

      <h4>{autor} </h4>
    </article>
  );
};

export default Book;
```

index.js

```js
import Book from "./Book";
```

## Imagens Locais (src/images folder)

- melhor performance
- adicionar mais um book ao array
- meter iamgens na pasta de imagens (src/images)
- import as 3 imagens no book.js
- cada imagem requer um novo import

```js
import image1 from "./images/book-1.jpg";
import image2 from "./images/book-2.jpg";
import image3 from "./images/book-3.jpg";

const books = [
  {
    id: 1,
    autor: "Jordan Moore",
    titulo: "Factos sobre a mente humana",
    imagem: image1,
  },
  {
    id: 2,
    autor: "James Clear",
    titulo: "Atomic Habits",
    imagem: image2,
  },
  {
    id: 3,
    autor: "Stephen King",
    titulo: "Fairy Tale",
    imagem: image3,
  },
];
export default books;
```

## Desafios

### Criar Numeros

- criar numeros
- nao se preocupem com css
- pist - utilizar ou id ou o index (segundo argumento do map)!

index.js

```js
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { i, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
```

index.css

```css
.book {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  /* set relative */
  position: relative;
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  padding: 0.75rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: #c35600;
  color: #fff;
}
```

### Adicionar Titulo

- adicionar um titulo à nossa app (css opcional)
- mudar titulo da pagina (<h1>amazon best sellers</h1>)

BookList.js

```js
function BookList() {
  return (
    <>
      <h1>amazon melhores vendas</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}
```

index.css

```css
h1 {
  text-align: center;
  margin-top: 4rem;
  text-transform: capitalize;
}
```

public/index.html

```html
<title>Melhores Vendas</title>
```
