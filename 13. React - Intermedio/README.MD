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

#### Multiple Returns - Basics

```js
import Starter from "./tutorial/03-conditional-rendering/starter/01-multiple-returns-basics.jsx";
```

Vanilla JS

```js
const sayHello = (name) => {
  if (name) {
    return `Hello, ${name}`;
    // sai da funcao, faz skip do resto do codigo
  }
  // se o nome for fornecido, nao vai ter a esta linha
  return "Hello, there";
};

const firstResp = sayHello("john");
console.log(firstResp); // Hello, john
const secondResp = sayHello();
console.log(secondResp); // Hello, there
```

- Se nao ha um explicito return, a funcao retorna 'undefined'

```js
import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  // enquanto fetching data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>My App</h2>;
};
export default MultipleReturnsBasics;
```

#### Multiple Returns - Fetch Data

```js
import Starter from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx";
```

Desafio :

- criar valores de estado e fazer fetch da data
- criar valor de estado
  - user - valor default: null
- fetch data do url (console.log do resultado)
- ver objeto na consola

```js
import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        console.log(user);
      } catch (error) {
        // fetch only cares about network errors
        // will work with axios
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return <h2>Fetch Example</h2>;
};
export default MultipleReturnsFetchData;
```

Data Fetching :

- normalmente configuramos tres opçoes

  - loading - esperar de data para chegar (mostrar loading state)
  - error - quando ha um erro (mostrar mensagem de erro)
  - success - data recebida (mostrar data)

```js
import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // convention to setup booleans with isSomething
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        // console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  // ordem importa
  // nao colocar JSX antes de loading ou erro
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
```

#### Fetch Errors

```js
import Starter from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx";
```

No caso do fetch (ao contrario da Axios), por default, a fetch() API nao considera codigos de estado HTTP no range de 400 a 599 como erros. Pelo contrário, considera estes status codes como um request de sucesso. Então, convem validar o erro com !resp.ok

```js
try {
const resp = await fetch(url);
// console.log(resp);
if (!resp.ok) {
  setIsError(true);
  setIsLoading(false);
  return;
}

const user = await resp.json();
setUser(user);

}

```

#### Ordem Importa - Setup

```js
import Starter from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx";
```

Desafio :

- desestruturar propriedades e remover user do JSX

```js
return (
  <div>
    <img
      style={{ width: "100px", borderRadius: "25px" }}
      src={avatar_url}
      alt={name}
    />
    <h2>{name}</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p>
  </div>
);
```

#### Ordem Importa - Solução

- antes do retorno

```js
const [user, setUser] = useState(null);
console.log(user); // ainda nulo
// nao conseguimos tirar propriedade de nulo
const { avatar_url, name, company, bio } = user;
```

- depois do retorno

```js
console.log(user); // user object;
const { avatar_url, name, company, bio } = user;
```

```js
return (
  <div>
    <img
      style={{ width: "100px", borderRadius: "25px" }}
      src={avatar_url}
      alt={name}
    />
    <h2>{name}</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p>
  </div>
);
```

Vanilla JS

```js
const someObject = {
  name: "jo koy",
};
// this is cool
someObject.name; // returns 'jo koy'
someObject.propertyThatDoesNotExist; // returns undefined

// erro!!!!!!!!!!!
const randomValue = null;
randomValue.name;

// Ok
const randomList = [];
console.log(randomList[0]); // retorna undefined

// erro!!!!!!!!!!!
console.log(randomList[0].name);
```

#### Nao executar HOOKS condicionalmente!!!!!

```js
import Starter from "./tutorial/03-conditional-rendering/starter/03-hooks-rule.jsx";
```

```js
import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // nao funciona
    const [state, setState] = useState(false);
  }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // vai falhar!
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default Example;
```

#### Valores Truthy e Falsy Values - Opcional

Vanilla JS

No JavaScript, um valor é considerado "truthy" se é avaliado como true quando
usado num contexto de boolean. Um valor é considerado "falsy" se é avaliado como
false quando usado num contexto de boolean.

Aqui está uma lista de valores considerados com falsos no JS:

false
0 (zero)
"" (empty string)
null
undefined
NaN (Not a Number)
Todos os outros valores, incluindo objetos e arrays, são considerados truthy.

Por exemplo:

```js
const x = "Hello";
const y = "";
const z = 0;

if (x) {
  console.log("x is truthy");
}

if (y) {
  console.log("y is truthy");
} else {
  console.log("y is falsy");
}

if (z) {
  console.log("z is truthy");
} else {
  console.log("z is falsy");
}

// Output:
// "x is truthy"
// "y is falsy"
// "z is falsy"
```

Neste exemplo, a varaivel x é uma string nao vazia, que é considerada truthy, então
apenas o primeiros é executado. A variavel y é uma string vazia, que é considerada
falsy, então o bloco else do segundo é executado. A varaivel z é o numero 0,
que é considerado falsy, entao o bloco else do terceiro é executado.

#### Curto Circuito Avaliação (opcional)

Vanilla JS

No JavaScript, a avaliação de curto-circuito é uma tecnica que permite
usar operadores logicos (como && e ||) para performar avaliações condicionais
numa forma concisa.

O operador && (AND/E) retorna o primeiro operando se é "falsy", ou o segundo operando
se o primeiro é "truthy".

Exemplo:

```js
const x = 0;
const y = 1;

console.log(x && y); // Output: 0 (o primeiro operando é falsy, então é retornado)
console.log(y && x); // Output: 0 (o segundo operando é falsy, então é retornado)
```

O operador || (OR/OU) retorna o primeiro operando se é "truthy", ou o segundo operando
se o primeiro é "falsy".

Exemplo:

```js
const x = 0;
const y = 1;

console.log(x || y); // Output: 1 (o primeiro operando é falsy, então o segundo é retornado)
console.log(y || x); // Output: 1 (o primeiro operando é truthy, então é retornado)
```

A avaliação de curto-circuito pode ser útil em casos onde tu queres performar uma
determinada ação apena se uma determina condição é encontrada, ou se vocês quiserem
retornar um valor defaul se uma certa condição não for encontrada!

Exemplo:

```js
function displayName(name) {
  return name || "Anonymous";
}

console.log(displayName("Pizza")); // Output: "Pizza"
console.log(displayName()); // Output: "Anonymous"
```

Neste exemplo, o displayName() retorna o nome da propriedade do objeto do user se
ele existir, ou "Anonymous" se o nome da propriedade não estiver presente. Isto pode
ser feito a usar o operador || e a avalição de curto-circuito!

#### Avaliação Curto Circuito React - Basico

```js
import Starter from "./tutorial/03-conditional-rendering/starter/04-short-circuit-overview.jsx";
```

Desafio :

- criar dois valores de estado
- um "falsy" e um "truthy"
- montar ambas as condições para cada operador no JSX - usar {}
  - || OR
  - && AND

```js
import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");

  const codeExample = text || "hello world";

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy AND {text && "hello world"}</h4>
      <h4>Truthy OR {name || "hello world"}</h4>
      <h4>Truthy AND {name && "hello world"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
```

#### Avaliação Curto Circuito React - Abordagens comuns

```js
import Starter from "./tutorial/03-conditional-rendering/starter/05-short-circuit-examples.jsx";
```

Vanilla JS
O operador ! é um operador logico no JavaScript que nega um valor boolean. Equivale ao not noutras
linguagens.

Exemplo:

```js
let isTrue = true;
let isFalse = false;

console.log(!isTrue); // outputs: false
console.log(!isFalse); // outputs: true
```

Podemos usar o operador ! para testar se um valor é truthy ou falsy:

```js
let val = 0;
if (!val) {
  console.log("val is falsy");
}
```

Podemos usar o operador ! para converter um valor para boolean e nega-lo:

```js
let val = "hello";
let bool = !val; // bool is now false

val = "";
bool = !val; // bool is now true
```

```js
import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  // can't use if statements
  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className="btn">log out</button>
    </div>
  );
};
export default ShortCircuitEvaluation;
```

#### Operador Ternário

Vanilla JS

No JavaScript, o operador ternário é uma forma concisa para exprimir uma simples
condicao.

Sintax:

```js
condition ? expression1 : expression2;
```

Se a condicao é truthy, o operador vai retornar a expression1. Se a condicao é falsy, vai retornar a expression2.

#### Toggle Challenge

```js
import Starter from "./tutorial/03-conditional-rendering/starter/06-toggle-challenge.jsx";
```

- criar um valor de estado (boolean)
- retornar um button e um componente/elemento
- quando um user clica num button
  - toggle o valor de estado
  - condicionalment renderizar o componente/elemento

Initial Setup

```js
import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };

  return (
    <div>
      <button className="btn" onClick={toggleAlert}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};
export default ToggleChallenge;
```

Improvements

```js
<button className='btn' onClick={() => setShowAlert(!showAlert)}>
```

#### User Challenge

```js
import Starter from "./tutorial/03-conditional-rendering/starter/07-user-challenge.jsx";
```

- criar valor de estado state value
  - user - valor default como nulo
- criar duas funcoes
  - login - coloca o user igual a um objeto com a propriedade name
  - logout - coloca o user igual a nulo
- no jsx usar ? para mostrar od dois diferentes setups

- h4 com "hello there, user name" e o button logout
- h4 com "please login " e o button login

```js
import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: "vegan food truck" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
```

#### FORMS - tema importante!

#### Controlled Inputs - Setup

```js
import Starter from "./tutorial/06-forms/starter/01-controlled-inputs.jsx";
```

Setup

```js
const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-input" id="email" />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
```

#### Controlled Inputs - Versão Completa

```js
import Starter from "./tutorial/06-forms/starter/01-controlled-inputs.jsx";
```

- criar valores de estado
- adicionar valor no onChange para cada input
- criar onSubmit event handler

```js
import { useState } from "react";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleChange = (e) => {
  //   // for now we won't use it
  //   const name = e.target.name;
  //   const value = e.target.value;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
```

#### Desafio

```js
import Starter from "./tutorial/06-forms/starter/02-user-challenge.jsx";
```

- montar um input controlado (name input)
- montar onSubmit (meter so como placeholder incialmente)
- importar array de data (primeiro array) da ./data
- criar outro valor de estado (data como default)
- iterar sobre a data e mostrar os valores depois do form (h4)
- quando o utilizador faz submit do form uma nova pessoa é adicionada à lista

- Desafio extra
  - adicionar button e montar funcionalidade para remover o user

```js
import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault(); // impedir atualizacao do browser
    // do something
    console.log(name);
    // se nenhum valor, nao fazer nada
    if (!name) return;
    // se valor, criar newUser e adicionar aos utilizadores atuais (users)
    const fakeId = Date.now();
    console.log(fakeId);
    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // vazio novamente
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users */}
      <h2>users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
```

#### Multiplos Inputs

```js
import Starter from "./tutorial/06-forms/starter/03-multiple-inputs.jsx";
```

[Javascript Nuggets - Dynamic Object Keys](https://www.youtube.com/watch?v=_qxCYtWm0tw&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=3&t=97s)

- inputs devem ter o atributo name

```js
import { useState } from "react";
const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
```

#### Outros Inputs

```js
import Starter from "./tutorial/06-forms/starter/04-other-inputs.jsx";
```

```js
import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
```

#### FormData API

```js
import Starter from "./tutorial/06-forms/starter/05-form-data.jsx";
```

[JS Nuggets - FormData API](https://youtu.be/5-x4OUM-SP8)

- uma ótima solução quando temos vários inputs
- inputs devem ter o atributo nome

A interface FormData providencia uma forma de construir uma estrutura de key/value (chave/valor)
que represa os campos do form e os seus valores, que podem ser mandados usando o fetch().

```js
import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const name = formData.get('name');
    // console.log(name);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log(newUser);
    // Nota - re-render won't clear out the values
    setValue(value + 1);
    // reset values
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
```

- e.currentTarget

No React, e.currentTarget retorna o elemento DOM que deu trigger ao evento.

- Object From Entries

O Object.fromEntries() é um metodo estatico que transforma uma lista
de chaves-valores num objeto!

```js
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

- reset()

O metodo reset() é um metodo built-in no HTML que pode ser usado para fazer
reset a todos os componente form ao valor inicial. Qunaod este método é
chamado num elemento form, vai ser claro que qualquer data introduzida por o utilizador
e faz o resete de todos os valores de todos os elementos form ao valor default.

#### Context API

```js
import Starter from "./tutorial/09-context-api/starter";
```

Desafio

- criar tres componentes e fazer nest(aninhar) da seguinte forma:

- Navbar.jsx

  - NavLinks.jsx (nested/aninhados no Navbar)
    - UserContainer.jsx (nested/aninhados no NavLinks)

- import Navbar.jsx na App.jsx (remover container (class) - CSS)
- na Navbar.jsx
  - criar valor de estado "user"
    - valor default {name:'something'}
  - funcao logout
    - meter user de volta a null
- passar ambos (user e logout) para o UserContainer.jsx como props
- display de user e button
- on button click set user back to null

- desafio extra
- se user null, no UserContainer display <p>please login</p>

Navbar.jsx

```js
import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
export default Navbar;
```

NavLinks.jsx

```js
import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavLinks;
```

UserContainer.jsx

```js
const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
```

Problemas disto:

Se eu tiver 5 componentes aninhadas, ex. A -> B -> C -> D -> E
Se eu só precisar de um valor de estado em A e em E, para quê estar a passar
por B, C e D??

- Propdrilling
  - App mais lenta (quando mais de 3 aninhadas)
  - Se mudancas num valor de estado no nivel mais acima implica renderizacao de
    todas as componentes na hierarquia
  - ...

Entao surgiram formas/técnicas de gestão de valores de estado (state values)

- Context API (mais simples)
- Redux (mais poderosa)
- outras

Vantagem: No fim de fazer o setup inicial, montar a estrutura não é preciso
mais alterar muito
Desvantagem: complexo de montar

#### Montar Global Context

- cirar um novo VITE project (no final do 09-context-api)

```sh
npm create vite@latest global-context -- --template react
```

- instalar e comecar o projeto

```sh
npm install && npm run dev
```

- no src create context.jsx
- montar um contexto global - GlobalContext
- montar um componente (AppContext) com um valore de estado
- retornar GlobalContext.Provider da AppContext
- embrulhar toda a aplicação (main.jsx)
- criar um custom hook (global = useContext(...))
- aceder no App.jsx
- log o resultado
