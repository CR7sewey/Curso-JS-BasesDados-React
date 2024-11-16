### Tabelas

Principal

- tag table: tabela
- tag thead: cabeçalho
- tag tr: linha
- tag th e td: valores das colunas

```html
<style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; /* borda e enchimento usado no calculo da largura e altura do conteudo*/
      }

      body {
        font-family: sans-serif;
      }

      table {
        border-collapse: collapse; /* tirar p espalo entre colunas */
      }

      table caption {
        caption-side: top;
        text-align: left;
        font-style: italic;
        margin-bottom: 3px;
      }

      table td,
      table th {
        border: 1px solid #ccc; /* border das th e td */
        padding: 4px;
        text-align: left;
      }

      table tfoot,
      table th {
        background-color: #ddd;
      }

      tfoot td {
        font-style: italic;
      }

      .responsive {
        max-width: 100%; /* 100% da pagina (horizontal */
        overflow-x: auto; /*arrastar para o lado */
      }
    </style>
  </head>
  <body>
    <p>Lorem ipsum dolor sit</p>
    <table class="responsive">
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <!-- Ocupo duas rows-->
          <td rowspan="2">Germany</td>
        </tr>
        <tr>
          <!-- Ocupo duas colunas-->
          <td colspan="2">
            Centro comercial
            Moctezumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Portugal</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" rowspan="2"></td>
          <td>Total:</td>
        </tr>
        <tr>
          <td>333 €</td>
        </tr>
      </tfoot>
      <caption>
        Sou uma caption
      </caption>
    </table>
  </body>
```
