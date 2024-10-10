# Comfy-tore

## Recursos uteis

- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)

## 1 - Vite e Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

```sh
npm create vite@latest comfy-store -- --template react
cd comfy-store
```

- adicionar tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- renomear para tailwind.config.cjs
- adicionar o seguinte conteudo

tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- remover App.css
- delete conteudos do index.css
- delete conteudos do App.jsx
- mudar titulo do html

```js
const App = () => {
  return <div>App</div>;
};
export default App;
```

- Adicionar as seguintes diretivas de Tailwind ao CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

As diretivas do Tailwind são isntruções que decidem como o Tailwind CSS cria
os styles para o website. Eles controlam o estilo global, component styles,
and utility classes.

- começar o projeto com "npm run dev"
- configurar a primeira classe tailwind no App.jsx
- remover StrictMode

  App.jsx

```js
const App = () => {
  return <h1 className="text-7xl font-bold underline">Projeto Tailwind</h1>;
};
export default App;
```

- [DaisyUI](https://daisyui.com/)

- adicionar e configurar o daisyui ao projeto
- adicionar o plugin de tiipografia TailwindCSS

```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

tailwind.config.cjs

```js
{
 plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## Instalar Todas as Libraries

```sh
npm i axios dayjs @reduxjs/toolkit @tanstack/react-query @tanstack/react-query-devtools react-icons react-redux react-router-dom react-toastify
```

## 2 - Criar Todas as Páginas

- Criar diretoria: pages
- criar todas as pages e exportar
- About, Cart, Checkout, Error,
  HomeLayout, Landing, Login,
  Products, Register, SingleProduct
- import no app.jsx

App.jsx

```js
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
} from "./pages";
```
