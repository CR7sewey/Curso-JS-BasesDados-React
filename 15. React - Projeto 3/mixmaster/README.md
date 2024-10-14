# MixMaster

- setup vite project

#### Install and Setup

```sh
npm create vite@latest mixmaster -- --template react
cd mixmaster
```

```sh
npm install
npm run dev
```

#### SPA

SPA significa Single-Page Application (Aplicação de Página única), que é
uma aplicação web que faz um update dinamico ao seu conteudo sem requerer um
reload de toda a página. Isto é atingido porque inicialmente há o load do HTML,
CSS, JavaScript inicial, e depois, dinamicamnete ha o fetching de data e o update
do DOM com a interação dos utilizadores com a aplicação.

O React Router é uma biblioteca de JavaScript usada nas aplicações React para lidar com o routing e a navegação. Fornece uma forma declaratica de definir as
rotas da aplicação e renderiza componentes diferentes baseado no URL. Esta
biblioteca ajuda os developers a criar aplicações sem descontinuidades, uma melhor experiencia do lado da navegacao do cliente.

[React Router](https://reactrouter.com/en/main)

```sh
npm i react-router-dom@latest
```

App.jsx

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h2>home page</h2>
        <a href="/about">About Page</a>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>about page</h2>
        <a href="/">Home Page</a>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
```

#### Setup Pages

- pages são components
- create src/pages
- About, Cocktail, Error, HomeLayout, Landing, Newsletter

App.jsx

```js
import About from "./pages/About";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```
