### Formularios - 1

[doc]https://www.w3schools.com/html/html_form_input_types.asp
[doc]https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

- form - vem logo com display block (ocupa a largura da div acima)
- action - para onde vai ser enviado o formulario ou uma funcao
- method:
  Se metodo GET -> como se enviasse os dados para o url
  Se metodo POST -> normalment dados mais sensiveis
- target - enviar para x ou y página
- ...

- input - para introduzir dados. Temos de vários tipos (text, email, number, password, ...)
- label - como se fosse o titulo do input

```html
<body>
  <form action="#" method="get" target="_blank">
    <section>
      <h2>Dados Contacto</h2>
      <label>Nome: </label>
      <input type="text" id="nome" name="nome" onchange="alert('Mudou')" />
      <label>Ultimo Nome: </label>
      <input type="text" id="ultimonome" name="ultimonome" />
      <label>Email: </label>
      <input type="email" id="email" name="email" />
    </section>
  </form>
  <script>
    const ultimonome = document.getElementById("ultimonome");
    ultimonome.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  </script>
</body>
```
