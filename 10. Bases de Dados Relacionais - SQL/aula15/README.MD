## Bases de Dados

### Select várias tabelas

Tudo o que temos feito até aqui são queries relativamente simples. No entanto, muitas
das vezes, nós queremos consultar algo em que tem de haver informação recolhida
entre duas ou mais tabelas. Por exemplo eu quero o first_name (tabela users) de todas
as pessoas que tem profile (registado na tabela profiles). Então temos de fazer uma interseção

Assim, neste exemplo, teria de fazer uma interseçção entre o elemento comum da tabela,
ou seja, id (users) = user_id (profiles)

Teoria:
select **(colunas)** from **(tabela 1, tabela 2)**
where **(tabela 1).coluna = (tabela 2).coluna**

Where é preciso porque senão fazia o produto cartesiano (ou seja ia fazer todas as combinaçoes posiveis de tabela 1 e tabela 2)

Ex:
SELECT u.id as uid, p.id as pid, u.first_name as name
from users as u,profiles as p
WHERE u.id = p.user_id -- se nao fazia produto cartesiano!
order by u.id asc;
