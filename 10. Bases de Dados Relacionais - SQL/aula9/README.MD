## Bases de Dados

### SQL Select

Serve para consultar dados (linhas) nas nossas tabelas

-- Seleciona colunas

-- select \* from users u;
select u.email as u_email, u.id as u_id, u.first_name as u_fn
from users as u;

Teoria:
select **colunas que queremos** from **tabela que queremos**
...

-: seleciona todas as colunas da tabela
as: renomear a coluna/tabela

Ex:
select \* from users;

select id from users;

select u.email as u_email, u.id as u_id, u.first_name as u_fn
from users as u;

Utilidade de meter u.table. Muitas das vezes vamos fazer queries em várias tabelas
que podem ter a mesma coluna.
