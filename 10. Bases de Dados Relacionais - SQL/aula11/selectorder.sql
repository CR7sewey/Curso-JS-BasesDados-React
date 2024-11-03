-- ORDER BY - order (ASC and DESC)
SELECT id, first_name, email as uemail
from users u
where id BETWEEN 10 and 50
order by first_name,id asc;
-- order by created_at asc;
-- order by first_name desc, id asc;
