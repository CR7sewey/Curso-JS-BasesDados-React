## Bases de Dados

### DML - data manipulation language e DQL - data query language

Este sim é o trabalho de um dev
Select, Insert, Update, Delete (CRUD)

-- COMENTARIO!!!
use base_de_dadps_curso2024;
show tables;
describe users; -- Descreve as colunas da tabela

### SQL Insert

Serve para inserir dados (linhas) nas nossas tabelas

-- Inserir registos na db (uma linha)

Teoria:
INSERT into users
(colunas da tabela)
values
(valores para as colunas #1),
(valores para as colunas #2),
...

Ex:
INSERT into users
(first_name, last_name, email, password_hash)
values ("Jose","Carvalho","jocas@gmail.com","j_hash"),
("Maria","Moreira","marias@gmail.com","m_hash");

Notas: - id não é necessário pôr visto que é autoincrement (faz por default) - created_at e updated_at tabmém não pois foram definidas para fazer em x momento.
