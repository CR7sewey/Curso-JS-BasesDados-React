-- INNER JOIN - intersecao entre tabelas!! [a,b] e [a,d] = [a]
SELECT u.id as uid, p.id as pid, p.bio, u.first_name 
from users u 
INNER JOIN profiles p
ON u.id = p.user_id  -- condicao de juncao das duas tables (tipo where)
WHERE u.first_name LIKE '%a'
order by u.id asc
LIMIT 10;