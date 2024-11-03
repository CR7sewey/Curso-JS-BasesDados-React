## Bases de Dados

### Insert com Select

-- insert select
-- insere valores em uma tabela usando outra

Teoria:
insert into profiles
**(colunas)**
SELECT **(valores)**
from **(tabela)**; -- qs como se fosse um for

insert into profiles
**(colunas)**
SELECT **(valores)**

Ex:
insert into profiles
(bio,description,user_id)
-- select 1,2,50; -- 50 permitido pq existe no users
SELECT CONCAT('bio de ',u.first_name),
CONCAT('description de ',u.first_name), u.id
from users as u; -- qs como se fosse um for
