## Bases de Dados

### Delete

-- Delete para apagar registos da tabela
-- PERIGOSOOOOO; Usar o where

Teoria:
DELETE FROM **(coluna)**
WHERE **(condição)**

Ex:
DELETE FROM users
WHERE id = 13;

DELETE FROM users
WHERE id BETWEEN 10 and 15;

select \* from users
where id BETWEEN 10 and 15;
