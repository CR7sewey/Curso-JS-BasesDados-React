-- Left JOIN - intersecao entre tabelas!! [a,b,g] e [a,d,c] = [a,b,g]
SELECT u.id as uid, p.id as pid, p.bio, u.first_name 
from users u 
LEFT JOIN profiles p
ON u.id = p.user_id;  -- condicao de juncao das duas tables (tipo where)