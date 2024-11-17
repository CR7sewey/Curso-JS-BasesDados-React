### Formularios - 2

[doc]https://www.w3schools.com/html/html_form_input_types.asp
[doc]https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

atributos:

- id: é o id do elemento
- name: outro tipo de indetificador (muito usado no backend para identificar os dados do input)
- placeholder: um valor exemplo (mas não esta mesmo presente - valor vazio)
- value: o valor do input (pode ter um default)
- for: relaciona a um input (no label)
- required: obrigatorio
- checked: selecionado (checkbox)
- ...

buttons:

- Precisamos de ter botoes para fazer o envio dos dados ou para fazer o reset;
- Depois do submit, ver a url

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meu HTML</title>
  <style>
    label {
      display: flex; /* era block (entao fica a ocupar a linha toda da div)*/
      margin-top: 10px;
      cursor: pointer;
    }
    .buttons {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <form action="#" method="get" class="form">
    <section>
      <h2>Dados Contacto</h2>
      <input type="hidden" value="Estou escondido" name="escondido" />
      <label for="nome">Nome: </label>
      <input type="text" id="nome" name="nome" value="Sou um valor" />
      <label for="ultimonome">Ultimo Nome: </label>
      <input type="text" id="ultimonome" name="ultimonome" disabled />
      <label for="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="exemplo@exemplo.com"
      />
      <label
        >Humano: <input type="checkbox" name="humano" value="true" checked
      /></label>
      <label
        >Idade: <input type="number" name="idade" min="0" max="120" value="18"
      /></label>
      <label>Genero: </label>
      <div>
        <label for="masculino"
          >Masculino
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="masculino"
            checked
        /></label>
        <label for="feminino"
          >Feminino
          <input type="radio" id="feminino" name="genero" value="feminino"
        /></label>
        <label for="outro"
          >Outro <input type="radio" id="outro" name="genero" value="outro"
        /></label>
      </div>
    </section>
    <section>
      <h2>Login</h2>
      <label>Username: </label>
      <input type="text" id="username" name="username" required />
      <label>Password: </label>
      <input type="password" id="password" name="password" />
    </section>
    <section class="buttons">
      <button
        type="submit"
        style="
            background-color: green;
            color: whitesmoke;
            border: 2px solid black;
          "
      >
        Submeter
      </button>
      <button
        type="reset"
        style="
            background-color: red;
            color: whitesmoke;
            border: 2px solid black;
          "
      >
        Reset
      </button>
    </section>
  </form>
  <script>
    const nome = document.getElementById("nome");
    nome.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  </script>
</body>
```
