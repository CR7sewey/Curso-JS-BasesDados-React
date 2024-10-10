# Axios Tutorial

#### Docs

[Axios Docs](https://axios-http.com/docs/intro)

#### Install

```sh
cd **diretoria**
npm create vite@latest aventuras-projeto -- --template react
npm install
```

```sh
npm install axios
npm run dev
```

- Copiar os seguintes:
  - pasta de components
  - examples
  - index.css
  - App.jsx

#### First Request

- import axios

CRUD operations: Creat (post), Retrieve (get), Update (patch), Delete (delete)

- axios.get(url)
- axios.post(url)
- axios.patch/put(url)
- axios.delete(url)

- valor default: get axios(url)

- retorna uma Promise
- response data
- error no error.response

```js
import axios from "axios";

const fetchData = async () => {
  try {
    // axios.get(), axios.post(),axios.put(), axios.delete()
    const response = await axios(url);

    console.log(response);
  } catch (error) {
    console.log(error.response); // ver consola!
  }
};
```

#### Headers

- segundo argumento
- axios.get(url,{})

- terceiro argumento em requests com data
- axios.post(url,{data},{})

```js
const url = "https://icanhazdadjoke.com/";

const fetchDadJoke = async () => {
  try {
    const { data } = await axios(url, {
      headers: {
        Accept: "application/json",
      },
    });
    // console.log(data);
    setJoke(data.joke);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Post Request

- enviar data para o server
- axios.post(url, { data })
- mais opcoes (auth header) - axios.post(url, { data },{})

```js
try {
  const resp = await axios.post(url, { data });
} catch (error) {
  console.log(error.response.data);
}
```

#### Global Defaults

- Put in global.js

```js
axios.defaults.headers["Accept"] = "application/json";

axios.defaults.baseURL = "https://api.example.com";

axios.defaults.headers["Authorization"] = AUTH_TOKEN;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
```

- Import in App.jsx
  import "./axios/global";

- check headers in console

desvantagem? é que para todos vai ficar com as configuracoes definidas globalmente

#### Custom Instance

```js
const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});
```

#### Interceptors

- global and custom

```js
authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers["Accept"] = `application/json`;

    console.log("request sent");
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);
```

##### Update

In the latest version there is no common property

```js
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Authorization"] = AUTH_TOKEN;
```

```js
request.headers["Accept"] = `application/json`;
```
