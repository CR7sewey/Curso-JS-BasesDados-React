### Questão da semantica

index_inicial.html

Antes do HTML 5, para criar um documento, bastava organizar por secções por exemplo com
a tag div. Por exemplo:

```html
<div id="header">
  <div id="menu"></div>
  <div id="conteudo-um"></div>
</div>
```

No entanto, com o HTML5 foram criadas tags especificas para usar semantica:

- article: para usar em composicao independente em um documento. Exemplo: post de um forum, ou produto de uma lista de produtos, etc
- aside: conteudo relacionado com o conteudo do seu entorno, que pode ser considerado separado dele. Exemplo: barras laterais
- footer: como se ofsse o rodape da seccao
- nav: usado para barras de navegação, em que temos as várias secções da página
- main: conteudo principal dentro do body
- section: secção generica dentro do doc html
- etc e etc

Tudo isto poderia ser feito com a tag div.

Exemplo geral:
index.html
