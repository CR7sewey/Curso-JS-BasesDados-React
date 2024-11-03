-- between seleciona entre um range! Pode ser usado para procurar por exemplo
-- alunos com idade entre 12 e 15 anos
-- ex: ... where u.created_at BETWEEN '2020-02-11 13:43:09' and '2021-02-11 13:43:09'
-- ex: ... where u.created_at >= '2020-02-11 13:43:09' and u.created_at <= '2021-02-11 13:43:09'
SELECT \* from users as u
where u.created_at
BETWEEN '2020-02-11 13:43:09' and '2021-02-11 13:43:09'
and u.id BETWEEN 20 and 55;