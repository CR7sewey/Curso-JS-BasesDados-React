### HTML e CSS

index_inicial.html

Pôr div na pagina. Mesmo não se nao se ver nada, a div esta la (inspect)
Podemos usar css para isso. Acrescentar style="width: 120px; height: 120px; background-color: red";
Ou seja, largura, altura e uma cor de fundo.

Como já mencionado, a estrutura do html são caixas dentro de caixas. Portanto,
podemos adicionar uma outra div dentro desta

```html
<div style="width: 120px; height: 120px; background-color: red;">
  <div
    style="width: 60px; height: 60px; background-color: rgb(0, 68, 255)"
  ></div>
  <div
    style="width: 60px; height: 60px; background-color: rgb(37, 189, 136)"
  ></div>
  <div
    style="width: 60px; height: 60px; background-color: rgb(224, 229, 83)"
  ></div>
</div>
```

Como vemos, a ultima caixa saiu da caixa principal. Isso porque são elementos box,
que tendem a quebrar linhas, e tambem porque nós não definimos no nosso css como
queremos o comportamento delas. Acrescentar às div: "float: left;" (vamso ver mais tarde melhor)

```html
<div style="width: 180px; height: 120px; background-color: red">
  <div
    style="
          width: 60px;
          height: 60px;
          background-color: rgb(0, 68, 255);
          float: left;
        "
  ></div>
  <div
    style="
          width: 60px;
          height: 60px;
          background-color: rgb(37, 189, 136);
          float: left;
        "
  ></div>
  <div
    style="
          width: 60px;
          height: 60px;
          background-color: rgb(224, 229, 83);
          float: left;
        "
  ></div>
  <div
    style="
          width: 120px;
          height: 60px;
          background-color: rgb(208, 54, 121);
          float: left;
        "
  >
    <div
      style="
            width: 30px;
            height: 30px;
            background-color: rgb(228, 122, 17);
            float: left;
          "
    ></div>
  </div>
</div>
```

Conclusao: caixa dentro caixa dentro de caixa

### Box Model

[BoxModel]https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

Abrir navegador e ir a Styles

- Content: conteudo é formado pela largura e altura; Normalmente, todas as tags
  ficam configuradas como block (display), assim, ocupam toda a largura da tela;
- Padding: mexe no conteudo da box, comprime;
- Border: acrescenta uma borda ao nosso elemento. Nota: tira pixeis do conteudo;
- Margin: mexe na box, transparente, empurra conteudos em relacao a outros; Elas nao somam, mas sim sobrepoem!

Mexer em várias!
index_boxModel.html
