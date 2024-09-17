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
