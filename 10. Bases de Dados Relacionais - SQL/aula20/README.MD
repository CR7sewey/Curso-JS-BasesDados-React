## Bases de Dados

### Update com JOINs

quero atualizar o perfil de uma pessoa com o nome 'Katelyn"

1º - ver pessoas com nome 'Katelyn'

```sql
select * from users where first_name='Katelyn'
```

2º - perfil dela

```sql
select p.id, p.bio, p.description, p.user_id
from profiles p inner join users u
on p.user_id=u.id
where first_name='Katelyn';
```

3º - update

```sql
update users as u
join profiles p
on u.id=p.user_id
set p.bio = 'Nova bio'
where first_name='Katelyn';
```

### Delete com JOINs

-- Delete joins

```sql
select u.first_name, u.id, p.bio  from users u
left join profiles p
on u.id = p.user_id
where u.first_name = 'Katelyn';

delete p, u from users as u -- apagar do p e do u!
-- (select u.first_name, u.id, p.bio  from users u
left join profiles p
on u.id = p.user_id
where u.first_name = 'Katelyn';)
```
