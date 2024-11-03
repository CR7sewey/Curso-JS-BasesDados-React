## Bases de Dados

### Select com vários JOINs

Quero um usuario (id e first name), role (name) e o perfil (bio) que tem.
Fazer passo a passo.

```sql
select u.id as uid, u.first_name as ufn, p.bio, r.name
from users u
left join profiles p on u.id = p.user_id
inner join users_roles ur on u.id = ur.user_id
inner join roles r on ur.role_id = r.id
order by u.id asc
```
