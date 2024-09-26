# React Intermédio

## Tópicos

- Nesta secção vamos ver:
  - React Hooks: como o useState, useEffect, useReducer etc
  - Forms: inputs controlados/nao controlados, value, eventos onSubmit, onChange,
    FormData API
  - Projetos Fundamentais
  - Mais Coisas: Context API, prop drilling, hooks genéricos, etc

## Setup

- Vite app tradicional
  - remover boilerplate
  - já meti alguns assets (css, data)
    - para focar no importante (React!)
- Portanto, clonar o projeto!
- De seguida,

```sh
npm install && npm run dev
```

- http://localhost:5173/

## Tópicos Intermédios

- /tutorial
- trabalhar na pasta starter
- código final na pasta final
- portanto para trabalhar importar para a App.jsx o componente de 'starter'
- portanto para ver o projeto final/solução ver o component de 'final'
- no inicio exemplos com numeros e butoes

ex:

```js
import Starter from "./tutorial/1-useState/starter/1-error-example";
import Final from "./tutorial/1-useState/final/1-error-example";
function App() {
  return (
    <div className="container">
      <Starter />
      <Final />
    </div>
  );
}

export default App;
```

# useState

## Necessidade de State

```js
import Starter from "./tutorial/01-useState/starter/01-error-example.jsx";
```

- no App.jsx criar import e container div

  Desafio:

- criar variavel count (pista: let count)
- mostrar valor no JSX ({count})
- adicionar button e aumentar o valor quando se clica no botao (onClick)
- ver consola do browser
- razão para bug - nós não fazemos trigger do re-render

```js
const ErrorExample = () => {
  let count = 0;
  console.log("Sou re-render", count);
  const handleClick = () => {
    count = count + 1;
    console.log(count);
    // preserve value between renders
    // trigger re-render
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
```
