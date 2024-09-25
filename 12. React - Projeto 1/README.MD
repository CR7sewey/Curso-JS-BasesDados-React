# Projeto Simples

- Notas: Vamos focar no React, e não tanto no HTML/CSS
- Dicas:

  - ver projeto total
  - ver desenvolvimento especifico - tentar desenvolver sozinho - comparar

- Vamos mudar de React para Vite (https://vitejs.dev/)
- ## Porque o vite? (https://vitejs.dev/guide/why.html)
  - temos de usar a extensao .jsx extension
  - index.html na raiz em vez de no public
  - em vez de index.js, temos de usar main.jsx
  - npm run dev em vez de npm start
  - de resto tudo igual - imports/exports, deployment, assets, etc...
  - Mais rápido que o React, menos código "lixo", flexivel melhores features,
    em suma, melhores experiencia no desenvolvimento
  - do ponto de vista de código puro, acaba por ser praticamente igual!

## Instalação

- Instalar Vite e dependencias

```sh
cd **diretoria**
npm create vite@latest aventuras-projeto -- --template react
npm install
```

- run dev server

```sh
npm run dev
```

## Ver código boilerplate - src folder

- main.js

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// css (styles) (nromalmente global global)
import "./index.css";

// DOM importado para o html - nossa componente root, onde todos os componentes
// se vão encontrar!
import App from "./App";

// StrictMode

// StrictMode é uma ferramenta para destacar problemas potenciais na aplicacao.
// Ativa checkagem adicional e avisos. Apenas funciona em desenvolvimento, não
// impacta em produção/build. Renderiza x2 (meter console.log e ver que gera 2 prints). Removivel.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Se quisermos medir a performance da app, podemos passar a funcao (por exemplo: reportWebVitals(console.log))
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- cuidado com os vários css files
- todos eles vao ser como se fundidos ao passar para o html geral
- ou seja o css nao esta fechado num escopo, ou a um componente especifico (tailwind css resolver isto p.e.)

App.js

```js
function App() {
  return <h1>aventuras app</h1>;
}

export default App;
```

- remover
  - remover react.svg e vite.svg
  - App.css

## Estrutura do projeto

- ./index.html

  - mudar o titulo
  - copy/paste font-awesome - biblioteca de icons (há outras! - podia ser instalado pelo npm i ...)

```html
<!-- font-awesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css"
  integrity="sha512-c93ifPoTvMdEJH/rKIcBx//AL1znq9+4/RmMGafI/vnTFe/dKwnn1uoeszE2zJBQTS1Ck5CqSBE+34ng2PthJg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

- index.css

  - copy/paste css - (material)
  - erro na linha 209, comentar por enquanto

```css
@media screen and (min-width: 768px) {
  /* .hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('../images/main.jpeg') center/cover no-repeat;
  } */
}
```

- src folder

  - copy/paste images folder (material)
  - colocar favicon.ico no public e no html (<link rel="icon" type="image/svg+xml+ico" href="./public/favicon.ico" />)

- App.js
  - refatorar para <React.Fragment> ou <></>
  - copy/paste todo o conteudo dentro da body tag, exceto <script> (index.html no material)
  - selecionar todas as innstacias "class" e refatorar para "className" (CMD + D) ou (CTRL+F)

## Montar Componentes

- no src criar pasta de componentes
- nos componentes criar os seguintes ficheiros
  - Navbar.jsx
  - Hero.jsx
  - About.jsx
  - Services.jsx
  - Tours.jsx
  - Footer.jsx
- montar componentes com default export (comando util - rafce)
- cuidado ao mover o código do App.jsx para os components
- App.js deve ficar vazio
- importar e renderizar todos os componentess no App.js
- resultado é o mesmo, mas mais fácil de manusear o código
  Cada um pode dividir o código como preferir, este é só o padrão

## Navbar

- primeiro vamos consertar a imagem (logo.svg)
  - montar import from images

```js
// import
import logo from "../images/logo.svg";

// JSX
<img src={logo} className="nav-logo" alt="backroads" />;
```

## Smooth Scroll

- html/css feature

testar scroll antes de implementar - clicar em Services na Navbar

```html
<!-- link - o # representa o id - se clicar-mos nesta tag ele vai para a section que tem como id services  -->
<a href="#services"> services </a>
<!-- elemento -->
<section id="services"></section>
```

- adicionar ao css para ter um scroll mais suave (já está adicionado!)
- testar remover do css

```css
html {
  scroll-behavior: smooth;
}
.section {
  /* navbar height */
  scroll-margin-top: 4rem;
}
```

## Pagina - Links

- refatorar codigo repetido!

```js
<li>
  <a href="#home" className="nav-link">
    home
  </a>
</li>
```

- Descubram qual data se está a repetir (pista - href, texto)
- no src criar data.js e criar uma estrutura
  - (prista - [{property:value},{property:value}])
- export/import e iterar sobre a lista, returnar elementos e injetar a data

```js
export const linksPagina = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
```

```js
import { linksPagina } from "../data";

{
  linksPagina.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className="nav-link">
          {link.text}
        </a>
      </li>
    );
  });
}
```

- com isto reduzimos muito o código!

## Nav Icons (social-links)

- repetir os mesmos passos
- adicionar rel='noreferrer'

```js
export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

{
  socialLinks.map((link) => {
    const { id, href, icon } = link;
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
  });
}
```

## Hero

- mudar o titulo ou texto (ex: Bem vindo!; ex: Isto é uma pagina que estamos a criar num curso de React!)
- corrigir a imagem (no css)

```css
.hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url("./images/main.jpeg") center/cover no-repeat;
  }*/
```

## About

- corrigir a imagem (pista - como fizemos no logo da navbar)

```jsx
import about from "../images/about.jpeg";
...
<div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
</div>
```

## Section Title

- nos componentes criar Title.jsx (pois repete-se, podemos poupar código!)
- estrura de outra secção
- inserir dois props {titulo, subTitulo}
- substitui em About, Services, Tours

```js
const Title = ({ titulo, subTitulo }) => {
  return (
    <div className="section-title">
      <h2>
        {titulo} <span>{subTitulo}</span>
      </h2>
    </div>
  );
};
export default Title;
```

About.js

```js
// import
import Title from "./Title";

// display
<Title titulo="about" subTitulo="us" />;
```

repetir para Services e Tours

## Services

- refatorar o codigo repetido (hint - como para a a pgina e os links das redes sociais)
  - criar data, export/import, iterar

data.js

```js
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    titulo: "saving money",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    titulo: "endless hiking",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    titulo: "amazing comfort",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];
```

Services.js

```js
import Title from "./Title";
import { services } from "../data";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title titulo={"our"} subTitulo={"services"} />

      <div className="section-center services-center">
        {services.map((servicos) => {
          return (
            <article className="service" key={servicos.id}>
              <span className="service-icon">
                <i className={servicos.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{servicos.titulo}</h4>
                <p className="service-text">{servicos.texto}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
```

## Tours

- refatorar codigo repetido repeating code

```js
export const tours = [
  {
    id: 1,
    image: tour1,
    data: "august 26th, 2020",
    titulo: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    localizacao: "china",
    duracao: 6,
    custo: 2100,
  },
  {
    id: 2,
    imagem: tour2,
    data: "october 1th, 2020",
    titulo: "best of java",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    localizacao: "indonesia",
    duracao: 11,
    custo: 1400,
  },
  {
    id: 3,
    imagem: tour3,
    data: "september 15th, 2020",
    titulo: "explore hong kong",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    localizacao: "hong kong",
    duracao: 8,
    custo: 5000,
  },
  {
    id: 4,
    imagem: tour4,
    data: "december 5th, 2019",
    titulo: "kenya highlights",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    localizacao: "kenya",
    duracao: 20,
    custo: 3300,
  },
];
```

- Tours.jsx

```js
import Title from "./Title";
import { tours } from "../data";

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title titulo={"tours"} subTitulo={"!"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.imagem} className="tour-img" alt="" />
                <p className="tour-date">{tour.data}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.titulo}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.localizacao}
                  </p>
                  <p>{tour.duracao} days</p>
                  <p>from ${tour.custo}</p>
                </div>
              </div>
            </article>
          );
        })}{" "}
      </div>
    </section>
  );
};
```
