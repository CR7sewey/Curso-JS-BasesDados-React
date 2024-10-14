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

#### Link

HomeLayout.jsx

```js
import { Link } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to="/about">About</Link>
    </div>
  );
};
export default HomeLayout;
```

About.jsx

```js
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default About;
```

#### Nested Pages

App.jsx

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
```

HomeLayout.jsx

```js
import { Link, Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
```

App.jsx

```js
{
  index:true // para aparecer com a HomeLayout diretamente
  element: <Landing />,
}
```

#### Navbar

- create components/Navbar.jsx

Navbar.jsx

```js
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- setup in HomeLayout

```js
<>
  <Navbar />
  <Outlet />
</>
```

```css
.nav-center {
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
}
.logo {
  font-size: clamp(1.5rem, 3vw, 3rem);
  color: var(--primary-500);
  font-weight: 700;
  letter-spacing: 2px;
}
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}
.nav-link {
  color: var(--grey-900);
  padding: 0.5rem 0.5rem 0.5rem 0;
  transition: var(--transition);
  letter-spacing: 2px;
}
.nav-link:hover {
  color: var(--primary-500);
}
.active {
  color: var(--primary-500);
}
@media (min-width: 768px) {
  .nav-center {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    flex-direction: row;
    margin-top: 0;
  }
}
```
