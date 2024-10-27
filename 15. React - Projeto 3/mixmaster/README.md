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

#### Mais Components

- no src/components criar SearchForm, CocktailList, CocktailItem
- renderizar SearchForm e CocktailList no Landing
- passar drinks, iterar sobre e renderizar no CocktailItem

Landing.jsx

```js
const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};
```

CocktailList.jsx

```jsx
const CocktailList = function ({ drinks }) {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  return (
    <div className="cocktail-list">
      <div>
        {drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          const drinkFormated = {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
          return <CocktailItem key={drink.idDrink} {...drinkFormated} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
```

- CocktailList css

```css
.cocktail-list div {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
```

```jsx
import { Link } from "react-router-dom";

export default function CocktailItem({ id, name, image, info, glass }) {
  return (
    <div className="cocktail-item">
      <article>
        <div className="img-container">
          <img src={image} alt={name} className="img" />
        </div>
        <div className="footer">
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>

          <Link to={`/cocktail/${id}`} className="btn">
            details
          </Link>
        </div>
      </article>
    </div>
  );
}
```

- CocktailList css

```css
.cocktail-item {
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
}

.cocktail-item:hover {
  box-shadow: var(--shadow-4);
}

.cocktail-item img {
  height: 15rem;
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
}
.cocktail-item .footer {
  padding: 1.5rem;
  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  h4 {
    font-weight: 700;
  }
  p {
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
}
```

#### Global Loading and Context

HomeLayout.jsx

```js
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <div className="loading" />
      ) : (
        <section className="page">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
```

#### Single Cocktail

```js
import { useLoaderData, Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  try {
    const searchTerm = params.id;
    const response = await axios(singleCocktailUrl.concat(searchTerm));
    return { drinks: response.data.drinks, searchTerm };
  } catch (e) {
    console.log(e);
    return e;
  }
};

const Cocktail = () => {
  const { drinks, searchTerm } = useLoaderData();
  const navigate = useNavigate();

  if (!drinks) {
    return <Navigate to="/" />;
  }
  console.log(drinks);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drinks[0];

  // ver array na consola os varios strIngredient
  const validIngredients = Object.keys(drinks[0]) // get keys
    .filter((vals) => {
      return vals.includes("strIngredient") && drinks[0][vals] !== null;
    })
    .map((strIngred) => drinks[0][strIngred]);
  console.log(Array.from(drinks[0]), Object.entries(drinks[0]));

  return (
    <div className="single-cocktail">
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>

          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
```

css

```css
.cocktail-item {
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
}

.cocktail-item:hover {
  box-shadow: var(--shadow-4);
}

.cocktail-item img {
  height: 15rem;
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
}
.cocktail-item .footer {
  padding: 1.5rem;
  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  h4 {
    font-weight: 700;
  }
  p {
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
}

/* SINGLE PRODUCT */

.single-cocktail header {
  text-align: center;
  margin-bottom: 3rem;
  .btn {
    margin-bottom: 1rem;
  }
}
.single-cocktail .img {
  border-radius: var(--borderRadius);
}
.single-cocktail .drink-info {
  padding-top: 2rem;
}
.single-cocktail .drink p {
  font-weight: 700;
  text-transform: capitalize;
  line-height: 2;
  margin-bottom: 1rem;
}
.single-cocktail .drink-data {
  margin-right: 0.5rem;
  background: var(--primary-300);
  padding: 0.25rem 0.5rem;
  border-radius: var(--borderRadius);
  color: var(--primary-700);
  letter-spacing: var(--letterSpacing);
}
.single-cocktail .ing {
  display: inline-block;
  margin-right: 0.5rem;
}
@media (min-width: 992px) {
  .single-cocktail .drink {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;
    align-items: center;
  }
  .single-cocktail .drink-info {
    padding-top: 0;
  }
}
```

#### React Toastify

[ReactToastify]https://www.npmjs.com/package/react-toastify

```bash
npm i react-toastify
```

```js
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </React.StrictMode>
);
```

```js
import { toast } from "react-toastify";

toast.success("Hi there");
```

#### Newsletter

Newsletter.jsx

```js
const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="john"
        />
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="smith"
        />
      </div>
      {/* name */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        submit
      </button>
    </form>
  );
};

export default Newsletter;
```

#### Comportamento default

O atributo "method" num form HTML especifica o metodo HTTP que vai ser usado
quando alguem submete a data do form para o servidor. Os metodos mais comuns são:

GET: Este é um metodo default qunado nao especificado. Quando o form é submetido
com o metodo GET, a data do form é anexado ao URL como uma query string (ex: http://...?q=a&b=c)
A data torna-se visivel no URL, que pode ser guardad e partilhada. Os requests
GET sao geralmente usados para retornar dados do servidor e pode nao ter qualquer
efeito no servidor (so consulta).

POST: Este é um metodo que é submetido com o metodo POST, em que a data do form
é incluido no payload do request em vez de ser anexado ao URL. Os requests POST
sao tipicamente usados quando sao subemetidos dados sensiveis ou grandes quantidade
de dados para o servidor. Assim, a data nao é diretamente visivel no URL. Os requests
POST podem ter efeitos laterais no servidor, como fazer o update ou inserir data.

- Atributo action

  O atributo "action" no form HTML especifica o URL ou o destino onde a data do
  form pode ser mandada quando o form é submetido. Define entao um endepoint/server-side
  que vai receber a data e processa-la

Se o atributo de action nao for providenciado no form do HTML, o browser vai mandar
a data do form para o URL atual, que significa que vai estar a submeter o form para a mesma pagina em que o form está. Este comportamento é referido como um "self-submitting" form.

#### FormData API

- coberto no React Intermedio
  [JS Nuggets - FormData API](https://youtu.be/5-x4OUM-SP8)

- Uma boa solucao com vários inputs
- inputs devem ter o atributo name

A API de FormData providencia uma forma de construir um conjunto de chave/valor
ao representar os campos do form e os valores, que podem ser mandando com o usdo
do fetch ou axios. Usa o mesmo formato que um forma ira usar se o tipo de enconding
for set como "multipart/form-data".

#### React Router - Action

Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the asynchrony and revalidation) with the behavior and UX capabilities of modern SPAs.

Newsletter.jsx

```js
import { Form } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return 'something';
};

const Newsletter = () => {
  return (
    <Form className='form' method='POST'>
    .....)
}
```

App.jsx

```js
import { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "newsletter",
        action: newsletterAction,
        element: <Newsletter />,
      },
    ],
  },
]);
```

#### Newsletter Request

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

Newsletter.jsx

```js
import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(newsletterUrl, data);
  console.log(response);
  return response;
};
```

#### Try/Catch

Newsletter.jsx

```js
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
```
