### Separar HTML e CSS

- HTML -> Estrutura
- CSS -> Estilo

Normalmente, quando usamos css puro e duro (sem ser em frameworks como o tailwind) é usual separar o CSS do HTML.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.caixa {
  background-color: red;
  height: 120px;
  width: 120px;
}
```

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meu HTML</title>
  <link rel="stylesheet" href="./index.css" />
  <link rel="stylesheet" href="./index2.css" />
</head>
<body>
  <div class="caixa">Sou uma caixa</div>
  <div class="caixa2">Sou uma caixa</div>
</body>
```
