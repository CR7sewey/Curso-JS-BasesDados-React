SELECT u.id as uid, p.id as pid, u.first_name as name
from users as u,profiles as p
WHERE u.id = p.user_id -- se nao fazia produto cartesiano!
order by u.id asc;