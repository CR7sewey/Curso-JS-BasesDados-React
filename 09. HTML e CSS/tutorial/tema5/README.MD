### Tags HTML para texto

index_inicial.html

- adicionar <p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tempore.
  Provident odio, dolore dolorum aperiam ullam reprehenderit quam voluptates
  laboriosam rerum corrupti consequatur recusandae tenetur veritatis nihil
  iure a eum?
    </p>

Tanto o p como o h1 já tem style associado (ver Computed no browser)
ex:
display: block (provoca logo umam quebra de linha)
font-size: 32px
etc

A ideia dos elementos html é que são tudo conjutnos de blocos dentro de outros
blocos!!
Dito isto, então quando metemso uma tag dentro de outra, é como se fosse um
bloco dentro de outro. Nota que podem haver tags que nao podemos pôr dentro de outras!
Exemplo dentro de um pagrafo nao se deve colocar um bloco, pois é um texto fluido (in-line - vamos ver depois no css)

Cada tag pode levar style (que é o css)

<h1 style="background-color: red">Isto é o meu cabecalho h1</h1> (só aplicado a esta tag)
<h1>Isto é o meu cabecalho h1 - 2</h1>

Outra forma é meter a tag <style></style> na head

tag de negrito: <b></b> - estado fisico - sem significado, apenas para deixar em negrito
tag strong: <strong></strong> - estado logico - semantica (tem significado) - ex: eu amo comer
tag italico: <i></i> - estado fisico
tag enfase: <em></em> - estado logico
tag link: <a href="https://www.google.com/">sou um link para o google</a> - href é o link
tag imagem: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s" alt="image-1" /> - src é a imagem e alt o texto alternativo que aparece caso imagem nao exista
tag quebrar linha: <br />
tag span: <span></span> - containers generico (in-line)
tag div: <div></div> - container generico (talvez a tag mais usada de todas)
e muito mais ...

<div>
<p>
  <strong>Lorem</strong> <b>ipsum</b> <i>dolor</i> <em>sit</em> amet,
  consectetur adipisicing elit. Ullam, tempore. <br />Provident odio, dolore
  dolorum aperiam ullam reprehenderit quam voluptates laboriosam rerum
  corrupti consequatur recusandae tenetur <span style="color: red">veritatis</span> nihil iure a eum?
</p>
</div>
<div>
<a href="https://www.google.com/" target="_blank">sou um link para o google</a>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s" alt="image-1" />
</div>
