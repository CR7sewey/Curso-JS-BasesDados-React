## Bases de Dados

```sql
-- 1) Insira 5 usuários (users)
-- 2) Insira 5 perfis (profiles) para os usuários inseridos
-- 3) Insira permissões (roles) para os usuários inseridos
-- 4) Selecione os últimos 5 usuários por ordem decrescente
-- 5) Atualize o último usuário inserido
-- 6) Remova uma permissão de algum usuário
-- 7) Remova um usuário que tem a permissão "PUT"
-- 8) Selecione usuários com perfís e permissões (obrigatório)
-- 9) Selecione usuários com perfís e permissões (opcional)
-- 10) Selecione usuários com perfís e permissões ordenando por salário

-- 1) Insira 5 usuários
INSERT into users
(first_name,last_name,email,password_hash,salary)
values
("Miguel","Carvalho","miguel1@gmail.com","MMMMMMMM1",round(rand()*10000,3)),
("Ricardo","Carvalho","miguel2@gmail.com","MMMMMMMM2",round(rand()*10000,3)),
("Maria","Carvalho","miguel3@gmail.com","MMMMMMMM3",round(rand()*10000,3)),
("Carolina","Carvalho","miguel4@gmail.com","MMMMMMMM4",round(rand()*10000,3)),
("Ze","Carvalho","miguel5@gmail.com","MMMMMMMM5",round(rand()*10000,3));

-- 2) Insira 5 perfís para os usuários inseridos
INSERT INTO profiles
(bio,description,user_id)
SELECT CONCAT("bio de ",u.first_name), CONCAT('description de ',u.first_name), u.id
from users u WHERE u.id IN (112,113,114,115,116);

-- 3) Insira permissões (roles) para os usuários inseridos
INSERT IGNORE INTO users_roles
(user_id,role_ide)
SELECT u.id, (select id from roles order by rand() limit 1)
from users u WHERE u.id IN (112,113,114,115,116);

-- or

insert into users_roles (user_id, role_id) values
(
	(select id from users where email = 'email1@a.com'),
	(select id from roles where name = 'PUT')
),
(
	(select id from users where email = 'email2@a.com'),
	(select id from roles where name = 'PUT')
),
(
	(select id from users where email = 'email3@a.com'),
	(select id from roles where name = 'PUT')
),
(
	(select id from users where email = 'email4@a.com'),
	(select id from roles where name = 'PUT')
),
(
	(select id from users where email = 'email5@a.com'),
	(select id from roles where name = 'PUT')
),
(
	(select id from users where email = 'email5@a.com'),
	(select id from roles where name = 'POST')
),
(
	(select id from users where email = 'email5@a.com'),
	(select id from roles where name = 'GET')
);


-- 4) Selecione os últimos 5 usuários por ordem decrescente
SELECT * from users u
ORDER by u.id desc
limit 5;

-- 5) Atualize o último usuário inserido
UPDATE users
set first_name = 'Zezocas', last_name ='Zezocas'
where id = 116;

-- 6) Remova uma permissão de algum usuário
SELECT * from users_roles ur
WHERE ur.user_id IN (112,113,114,115,116);

DELETE FROM users_roles
WHERE user_id = (select id from users u where u.email ='...')
and role_ide = (select id from roles order by rand() limit 1)

-- 7) Remova um usuário que tem a permissão "PUT"
SELECT * from roles r ; -- PUT: 5

SELECT * from users_roles ur
WHERE ur.user_id IN (112,113,114,115,116);  -- vou eliminar 112

delete u from users as u # apagar do p e do u!
inner join users_roles ur on u.id = ur.user_id
inner join roles r on ur.role_ide = r.id
where u.id = 112 and r.name="PUT";

-- 8) Selecione usuários com perfís e permissões (obrigatório)
SELECT u.id as uid, u.first_name, r.name, p.bio
from users u
inner join users_roles ur on u.id = ur.user_id
inner join roles r on ur.role_ide = r.id
inner join profiles p on p.user_id = u.id;


-- 9) Selecione usuários com perfís e permissões (opcional)
SELECT u.id as uid, u.first_name, r.name, p.bio
from users u
left join users_roles ur on u.id = ur.user_id
left join roles r on ur.role_ide = r.id
left join profiles p on p.user_id = u.id;

-- 10) Selecione usuários com perfís e permissões ordenando por salário
SELECT u.id as uid, u.first_name, r.name, p.bio
from users u
left join users_roles ur on u.id = ur.user_id
left join roles r on ur.role_ide = r.id
left join profiles p on p.user_id = u.id;
order by u.salary asc;
```
