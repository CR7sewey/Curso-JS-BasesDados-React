## Bases de Dados

### SQL Select + BETWEEN, IN, LIKE, ORDER, LIMIT, OFFSET

-- between seleciona entre um range! Pode ser usado para procurar por exemplo
-- alunos com idade entre 12 e 15 anos
-- ex: ... where u.created_at BETWEEN '2020-02-11 13:43:09' and '2021-02-11 13:43:09'
-- ex: ... where u.created_at >= '2020-02-11 13:43:09' and u.created_at <= '2021-02-11 13:43:09'
SELECT \* from users as u
where u.created_at
BETWEEN '2020-02-11 13:43:09' and '2021-02-11 13:43:09'
and u.id BETWEEN 20 and 55;

-- in equivale a um or (array de valores para a bd) e ve se ha la
-- seleciona elementos entre os valores enviados! Pode ser usado para procurar
-- por exemplo alunos com o ultimo nome 'Carvalho' ou 'Silva'
-- ex: ... where u.last_name in ('Carvalho','Silva')
-- ex: ... where u.last_name = 'Carvalho' or u.last_name = 'Silva'
SELECT \* from users as u
where u.id in (1,15,20,70,1000) -- em vez de or!
and first_name in ('Aspen','Merrill');

-- like something, ou seja, como algo
-- % qualquer coisa
-- _ um caracter
-- %a - qualquer coisa antes e termina em a
-- %ab% - qualquer coisa antes e depois e tem ab
-- 'j\_\_o_' - encontra jacob (3 \_ e comeca com j e tem o o - 5 caracteres)
SELECT \* from users as u
where first_name LIKE '%a'
and last_name LIKE 'R%'
and first_name LIKE '%y%'; -- termina com a e começa com R e tem y

-- ORDER BY - order (ASC and DESC)
SELECT id, first_name, email as uemail
from users u
where id BETWEEN 10 and 50
order by first_name,id asc;
-- order by created_at asc;
-- order by first_name desc, id asc;

-- limit limita a quantidade de valores
-- offset avanca o cursor (mudar pra ver) - usado para paginacao
SELECT id, first_name, email as uemail
from users u
where id BETWEEN 10 and 50
order by first_name,id asc
limit 5 offset 2;
