-- in equivale a um or (array de valores para a bd) e ve se ha la
-- seleciona elementos entre os valores enviados! Pode ser usado para procurar
-- por exemplo alunos com o ultimo nome 'Carvalho' ou 'Silva'
-- ex: ... where u.last_name in ('Carvalho','Silva')
-- ex: ... where u.last_name = 'Carvalho' or u.last_name = 'Silva'
SELECT \* from users as u
where u.id in (1,15,20,70,1000) -- em vez de or!
and first_name in ('Aspen','Merrill');