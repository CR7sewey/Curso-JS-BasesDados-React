## Bases de Dados

### Insert de dados nos roles

Vamos considerar que existem 4 roles: POST, PUT, GET, DELETE

```sql
INSERT into roles
(name)
values ("POST"),("PUT"),("GET"),("DELETE");
```

### Insert de dados para users_roles

Para inserir dados em users_roles, nós temos de consultar duas tabelas (users e roles)

```sql
insert into users_roles
(user_id, role_id )
select users.id, (select id from roles order by rand() limit 1) from users
```

Notas:
select id from roles order by rand() limit 1 -> o retorno tem de ser um valor e não um array, daí o limit 1
meter insert ignore into ... para correr uma segunda vez (problema de puder repetir pk)
