## Bases de Dados

### SQL Select + Where

Serve para consultar dados (linhas) nas nossas tabelas

-- Seleciona colunas
-- where filtra registos
-- = < > >= <= != <> : operadores de comparacao
-- and, or : operadores logicos

Teoria:
select **(colunas que queremos)** from **(tabela que queremos)**
where **(condicao)**
...

Ex:
select \* from users
where id = 1;

SELECT \* from users as u
where u.last_name = "Carvalho"
and u.created_at >= '2024-01-01 14:21:03';

Notas: quando fazemos update ou delete (que vamos ver + à frente) TEMOS DE TER o where.
Se não, o que vai acontecer é que fazemos update/delete a todas as linhas/rows da tabela.

### Inserir dados ficticios
