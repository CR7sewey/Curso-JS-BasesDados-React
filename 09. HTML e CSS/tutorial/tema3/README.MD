### Atributos de id e class

<h1>Isto é o meu titulo</h1>

Nós colocamos atributos dentro da tag.
Temos vários tipos de atributos.
Mias famosos são: id, name, class, disabled

ex:

<h1 id="cabecalho-um">Isto é o meu titulo</h1>
id: identificador unico naquele ficheiro html; podemos usar este id posteriormente no css ou js
<h1 id="cabecalho-dois">Isto é o meu titulo 2</h1>

<h1 id="cabecalho-um" class="cabecalho cabecalho-um">Isto é o meu titulo</h1>
classe: identificador naquele ficheiro html, não é unico e pode ser mutiplo; podemos usar esta classe posteriormente no css ou js
muito usado para meter por exemplo todos os elementos com classe="cabecalho" com background a vermelho
<h1 id="cabecalho-dois" class="cabecalho cabecalho-dois">Isto é o meu titulo 2</h1>
acrescentar a seguinte tag styles (vai ser o nosso css no futuro, aqui dentro do html) para visualizar isto
<style>
      .cabecalho {
        background-color: red;
      }
      #cabecalho-um {
        color: blue;
      }
      .cabecalho-dois {
        color: darkorange;
      }
</style>
