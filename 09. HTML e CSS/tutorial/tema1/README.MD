### Estrutura Do HTML

Basicamente o HTML é um arquivo de texto que o navegador
utiliza para renderizar coisas na página. Qualquer página
que vemos na internet utiliza HTML para renderizar
os seus elementos. O navegador tambem executa o JS e o CSS,
daí estas 3 tecnologias serem fundamentais para criar aplicacoes.

Para criar um ficheiro html, temos de criar um ficheiro .html
Portanto, isto é uma arquivo de texto que obedece a regras especificas
para ser renderizado.

O que é uma tag html?
Basicamente tudo o que abrimos com este sinal <> e escreve o nome da tag
Uma tag pode ter corpo, ou seja, pode ter outras tags dentro
dela
exemplo:
<primeiraTag> // abrir
<outraTag></outraTag>
</primeiraTag> // fechar

portanto ha aqui uma hierarquia, a ordem de fechar tem de ser correta

Estas tags não existem, Portanto nao vao funcionar

há tags que podem nao ter corpo
<tagSemCorpo />

O que são atributos da tag?
<tagSemCorpo src="url" />

Há atributos que são opcionais e outros que não, tudo depende das tags

ha tags compostas:
<tagSemCorpo class="classe1 classe2" />

//

Colocar Ola Mundo no html e ver modelo de caixa e ver html

Abrir HTML: ! + Enter
tag head: metadados do meu html, a especificaçao do que tem o meu html. Exemplos: title; meta (charset- codificacao de carateres como utf-8, etc), etc

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />: para permitir visualizar em dispositivos moveis

tag body: onde metemos as tags que vão ser mostradas no navegador

[validarHTML]https://validator.w3.org/
