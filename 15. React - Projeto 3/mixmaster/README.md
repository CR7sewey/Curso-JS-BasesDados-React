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

#### About Page

About.jsx

```jsx
import Wrapper from "../assets/wrappers/AboutPage";

const About = () => {
  return (
    <div className="about">
      <h3>About Us</h3>
      <p>
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </p>
    </div>
  );
};

export default About;
```

```css
.about p {
  line-height: 2;
  color: var(--grey-500);
  margin-top: 2rem;
}
```

#### Page CSS

HomeLayout.jsx

```js
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
```

index.css

```css
.page {
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 2rem;
}
```

#### Error Page

- wrong url

Error.jsx

```js
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="error">
        <div>
          <img src={img} alt="not found" />
          <h3>Oh! </h3>
          <p>Não conseguimos encontrar a página que procuras</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error">
      <div>
        <h3>Algo Errado :(</h3>
      </div>
    </div>
  );
};

export default Error;
```

#### Error Page - CSS (optional)

```css
.error div {
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error img {
  width: 90vw;
  max-width: 600px;
  display: block;
  margin-bottom: 2rem;
  margin-top: -3rem;
}
.error h3 {
  margin-bottom: 0.5rem;
}

.error p {
  line-height: 1.5;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: var(--grey-500);
}
.error a {
  color: var(--primary-500);
  text-transform: capitalize;
}
```

##### App

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
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

#### Fetch

- useEffect

Landing.jsx

```js
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const fetchSomething = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchSomething();
}, []);
```

#### Loader

Cada rota pode definir uma funcao 'loader' para fornecer data ao elemento raiz antes de renderizar

- deve retornar algo sempre, nem que seja null!!!!

Landing.jsx

```js
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const response = await axios(url);
    return { drinks: response.data.drinks };
  } catch (e) {
    console.log(e);
    return e;
  }
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data.drinks);
  return <h1>Landing</h1>;
};
export default Landing;
```

```js
import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
      // rest
    ],
  },
]);
```

#### TheCocktailDB

[API](https://www.thecocktaildb.com/)

- Procurar cocktail pelo o nome
  www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

#### Landing - Fetch Drinks

Landing.jsx

```js
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(drinks);
  return <h1>Landing page</h1>;
};

export default Landing;
```

- se search term fro 'a' returns algumas bebidas default (que contem a)
- se search term não tiver correspondenica, retorna null

#### Mais Erros

- ex: caso nao haja return do loader
- ex: url errado

App.jsx

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <h2>Há um erro...</h2>,
        element: <Landing />,
      },
    ],
  },
]);
```

#### SinglePageError Componente

- criar pages/SinglePageError.jsx
- usar no App.jsx (errorElement)

```js
import { useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>{error.message}</h2>;
};
export default SinglePageError;
```
