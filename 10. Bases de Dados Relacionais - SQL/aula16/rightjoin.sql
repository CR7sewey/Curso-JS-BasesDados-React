
-- RIGHT JOIN - intersecao entre tabelas!! [a,b,g] e [a,d,c] = [a,d,c]
-- aqui nao se ve por causa da relacao entre as tabelas (cascade, entao se
-- eliminar da users tmb elimina da profiles, mas como para o left, apareceria null o que nao
-- tivesse ligacao na null!
SELECT u.id as uid, p.id as pid, p.bio, u.first_name 
from users u 
RIGHT JOIN profiles p
ON u.id = p.user_id;  -- condicao de juncao das duas tables (tipo where)
