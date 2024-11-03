select * from users
where id=1;

SELECT * from users as u
where u.last_name = "Carvalho"
and u.created_at >= '2024-01-01 14:21:03';