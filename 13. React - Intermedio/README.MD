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

## useState - Basico

```js
import Starter from "./tutorial/01-useState/starter/02-useState-basics.jsx";
```

[Javascript Nuggets - Destructuring (Array)](https://www.youtube.com/watch?v=qhECs40xMec&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=7&t=9s)

- useState hookdoiso elementos: o vlaor de estado autal, e uma função que nós podemos usar para fazer update do estado
- aceita o valor default como argumento
- o update do estado faz trigger do re-render

```js
import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // cuidado, nós podemos modificar com qualquer valor
    // setCount('calcas');
  };
  return (
    <div>
      <h4>Tu clicaste {count} vezes</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
```

## Render inicial e Re-Render

Numa aplicação React, o render inicial é a primeira vez que a árvore de components
é renderizada para o DOM. Acontece quanod a aplicação inicialmente faz load,
ou qunado a compoonente raiz é inicialmente renderizada. ("mounting")

Re-Render, por outro lado, acaontece quando o estado do component ou os props mudam,
e o compoennte necessita de ser alterado no DOM para refletir estas mudanças. O React
usa o DOM virtual para otimixar o processo de fazer update do DOM atual, para que assim
só mundaças necessárias sejam feitas.

Maneiras de ativar o re-render num componente React:

- Alterar o estado ou props do componente
- Quando o elemento pai faz re-render (propaga para os filhos)

## Regras Gerais de Hooks

- começa com "use"
- componentes devem ser uppercase (ex: useState)
- tem de ser invocados dentro da funcao/componente
- não chamar hooks condicionalmente (if codicao ...)

## useState com Array

```js
import Starter from "./tutorial/01-useState/starter/03-useState-array.jsx";
```

Desafio :

- import data
- criar um valor state
  - people ou pessoa - valor default igual a data
- mostrar lista de pessoas no browser

- criar duas funcoes

  - uma que remova um elemento unico da lista (pista: array.filter())
  - uma que limpe a lista inteira

1. renderizar a lista

```js
import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
```

2. remover itens

[Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)

```js
import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
```

## useState com Object

```js
import Starter from "./tutorial/01-useState/starter/04-useState-object.jsx";
```

Desafio :

- criar tres valores de estado
  - name(string)
  - age(number)
  - hobby(string)
- renderizar no browser
- criar button
  - criar uma funcção
    - fazer update a todos os state values
- como resultado, assim que o user clica no button,
  uma nova pessoa é msotrada no browser

```js
import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    setName("john");
    setAge(28);
    setHobby("scream at the computer");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To: {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
```

## Automatic Batching

No React, "batching" refere-se ao processo de agrupar mutiplos updates de estados
em um update unico. Isto pode ser útil em certos caos porque permite ao React optimizar
a renderização dos nossos componentes através da minimizaçãi do numero de updates
do DOM que tem de ser performados.

Por default, o React usa um técnica chamada "auto-batching" para agrupar updates de estado
que ocorrem dentro do mesmo evento em um update único. Isto significa que se voces chamarem a
funcao de update de estado multiplas vezes num curto periodo de tempo, o React vai apenas perfroma
uma renderização unica para todos os updates.

## Mudar para Objeto

```js
import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    // setPerson('shakeAndBake');
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
```

## "Gotcha" - Marotice

```js
import Starter from "./tutorial/01-useState/starter/05-useState-gotcha.jsx";
```

Desafio :

- criar um valor de estado e um button
- adicionar funcionalidade para aumentar o valor por 1
- console.log o valor de estado, logo a seguir ao clicar no button (dentro da setFunction)

Tenham atenção que a funcao de update do estado (setState) não faz imediatamente a
mudança do estado. Em vez disso, "agenda" um update ao estao e diz ao React
que necesssita de re-renderizar o componente. O estado atual do update do estado
vai ser performado como parte do proximo ciclo de renderização. Portanto, ter atenção
quando for preciso de mudar o valor de estado baseado num valor de estado diferente.

Exemplo trivial - ver browser e consola

```js
import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    //  cuidado que é o valor antigo
    console.log(value);
    // entao se houver alguma funcionalidade que dependa do valor atual, pode dar erro
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
```

Se vocês quiserem fazer update ao estado imediatamente e sincronamente, podemos
passar uma função para mudar o estado que recebe o estado como um argumento e retorna
o novo estado. Exemplo:

```js
setState((prevState) => {
  return { ...prevState, value: newValue };
});
```

Logo isto pode ser util quando é necessario alterar o valor do estado baseado no
anteriormente, ou se precisamos de alterar o estado sincronamente

```js
const handleClick = () => {
  setValue((currentState) => {
    // tem de returnar senao undefined
    const newState = currentState + 1;
    return newState;
  });
};
```

- setTimeout Example - temos de usar esta abordagem

```js
const handleClick = () => {
  // setTimeout(() => {
  // console.log('clicked the button');
  //   setValue(value + 1); // tentar clicar 5 x e validar que so fica +1! isto pois o value sempre que invocamos a funcao o value é o mesmo, nao altera!
  // }, 3000);
  setTimeout(() => {
    console.log("clicked the button");
    setValue((currentState) => {
      return currentState + 1; // tentar clicar 5 x e validar que so fica +5!
    });
  }, 3000);
};
```

- as an example refactor code in
  /tutorial/01-useState/03-useState-array
- should we use functional update approach for everything?

# useEffect

## Exemplo código

```js
import Starter from "./tutorial/02-useEffect/starter/01-code-example.jsx";
```

```js
import { useState } from "react";

const ComponentExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };
  sayHello();
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default ComponentExample;
```

- Qual pode ser o problema deste código?
- Se nós fizermos uma alteração ao valor dentro da função, vamos entrar num
  loop infinito, pois o ciclo é: renderizar o componente -> função é executada e
  altera o valor -> como valor foi alterado componente é re-renderizado -> função é executada e
  altera o valor -> ...

ex:

```js
const [value, setValue] = useState(0);

const sayHello = () => {
  console.log("hello there");
  // be careful, you will have infinite loop
  setValue(value + 1);
};
sayHello();
```

- Portanot, isto é um problema!

- E se quisermos fazer fetch de data/uma api?
- Podemos usar o useEffect hook!

## useEffect Basics

```js
import Starter from "./tutorial/02-useEffect/starter/02-useEffect-basics.jsx";
```

useEffect é um hook no React que permite realizar efeitos "laterais" numa funcao
num componente. Exemplo: subscriçoes, fetching data, alterar diretamente o DOM,
event listeners, timers, etc

- useEffect hook
- aceita dois argumentos (segundo opcional)
  - primeiro argumento - callback function
  - segundo argumento - array de dependencias
  - por default corre em cada renderizacao (priemiro e re-renderizacao)
- callback function nao retorna uma Promise (portanto nao podemos fazer async)
- se array de dependencias vazio [] corre só no render inicial
- se array com elemento, só é ativado aquanod da mundaca do elemento

```js
import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  // useEffect(() => { // ativado smepre que compoennte renderizado
  //   console.log('hello from useEffect');
  // });

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
```

## Multiple Effects

```js
import Starter from "./tutorial/02-useEffect/starter/03-multiple-effects.jsx";
```

```js
import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
```

## Fetch Data

```js
import Starter from "./tutorial/02-useEffect/starter/04-fetch-data.jsx";
```

[Javascript Nuggets - Fetch API](https://www.youtube.com/watch?v=C_VIKzfpRrg&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=18&t=343s)

- Ver módulo JavaScript Assíncrono (https://medium.com/@johnnyJK/axios-vs-fetch-api-selecting-the-right-tool-for-http-requests-ecb14e39e285)

- mais tarde no curso vamos usar axios (axios ou fetch sao duas API usadas para consumir dados)

Desafio :

- import useState e useEffect
- criar valor de estado
  - users - default value [] (const [users, setUsers] = useState([]))
- implementar useEffect
- FAZER COM QUE SO CORRA NO RENDER INICIAL!!!
- na callback function, criar uma funcao que perform a funcionaldiade de fetch
  - usar o url no inicio do file
  - podemos usar .then ou async (minha preferencia)
  - meter users igual ao resultado
  - iterar sob a lista e mostrar a imagem, nome e link

```js
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // you can also setup function outside
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
```

## Funcao de Limpeza (Cleanup) - talvez nao seja relevante para isto

```js
import Starter from "./tutorial/02-useEffect/starter/05-cleanup-function.jsx";
```

- Desafio:

- criar valor de estado
- no jsx retornar button que muda(toggle) o valor de estado (true -> false -> true)
- baseado na condicao de retorno de segundo elemento
- dentro do segundo compoente criar useEffect e correr apenas no render inicial

```js
import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm, this is interesting");
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
```

Vanilla JS

```js
const intID = setInterval(() => {
  console.log("hello from interval");
}, 1000);
clearInterval(intID);
```

```js
const someFunc = () => {
  // some logic here
};
window.addEventListener("scroll", someFunc);
window.removeEventListener("scroll", someFunc);
```

```js
import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
```

```js
useEffect(() => {
  // console.log('hmm, this is interesting');
  const someFunc = () => {
    // some logic here
  };
  window.addEventListener("scroll", someFunc);
  return () => window.removeEventListener("scroll", someFunc);
}, []);
```
