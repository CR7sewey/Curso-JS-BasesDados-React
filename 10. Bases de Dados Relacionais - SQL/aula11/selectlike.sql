-- like something, ou seja, como algo
-- % qualquer coisa
-- _ um caracter
-- %a - qualquer coisa antes e termina em a
-- %ab% - qualquer coisa antes e depois e tem ab
-- 'j\_\_o_' - encontra jacob (3 \_ e comeca com j e tem o o - 5 caracteres)
SELECT \* from users as u
where first_name LIKE '%a'
and last_name LIKE 'R%'
and first_name LIKE '%y%'; -- termina com a e começa com R e tem y