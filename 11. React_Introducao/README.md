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
