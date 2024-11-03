-- limit limita a quantidade de valores
-- offset avanca o cursor (mudar pra ver) - usado para paginacao
SELECT id, first_name, email as uemail
from users u
where id BETWEEN 10 and 50
order by first_name,id asc
limit 5 offset 2;