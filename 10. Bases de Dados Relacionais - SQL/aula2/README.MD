## Bases de Dados

### Diagrama

O Diagrama Entidade Relacionamento é uma abstração da parte do sistema que
vamos criar. Vamos imaginar um sistema enorme que gerencia uma empresa.
Podemos criar o diagrama do sistema inteiro, só que ia ficar gigante.
Então, costumamos abstrair um pequeno trecho de um programa que poderia ser maior. Exemplo: Neste diagrama, temos os usuarios, perfis e os papeis/permissoes de cada.
Ou seja, podiamos encaixar isto com outras coisas do sistema.
Esse trecho está representado no diagrama.
Entidade: tabelas
Relacionamento: relacionamentos entre as tabelas (várias especificações)

### Entidade

Então, cada entidade é representada por cada um dos retangulos/tabelas que podemos
ver no diagrama.

Cada entidade é uma tabela na base de dados, no caso users, user_roels, roles, profiles. Cada tabela tem atributos/colunas. No caso da tabela users são: id,
first_name, last_name, email, password_hash. Visto que o diagrama é uma abstração,
não precisamos passar todo o tipo de dados (ex: se é uma String, Boolean, Integer etc).
Outra coisa importante é tambem as propriedades das colunas, como ser PK - Primary Key - Chave Primária (tabela users). Esta sigla significa que cada linha da tabela vai ter um id unico, não se pode repetir! ou seja, a titulo de exemplo (ver users_exemplo):
1ª linha: id: 1, first_name: "miguel", last_name: "carvalho", email: "m@gmail.com", password_hash: "123456"
2ª linha: id: 1, first_name: "miguel", last_name: "carvalho", email: "m@gmail.com", password_hash: "123456" -----> PROIBIDO
2ª linha: id: 2, first_name: "miguel", last_name: "carvalho", email: "m@gmail.com", password_hash: "123456" -----> PERMITIDO

PK - Primary key - chave primária:

- Unica: A ideia de ter uma coluna PK é para ter um IDENTIFICADOR único para aquela linha,
  visto que existem vários tipos de dados que podem coincidir (como first_name).
- Não nula: Não pode ser nulo
- Só uma: cada entidade/tabela só pode ter uma PK
- normalmente é criado automaticamente e um valor que não vamos alterar no futuro,
  até porque estes valores podem ser passados a outra tabelas para identificar a
  relação (biblioteca uuid() ou autoincrement)

FK - Foreign key - chave estrangeira:

- Representa a relaçao com outra entidade nesta atraves da sua PK (coluna da outra tabela). Exemplo: user_id na entidade profiles. Isso acontece para nós sabermos de quem é o profile (ver profiles_exemplo)

Tabela users_roles:

Esta tabela tem duas identificaoes de PK e FK. Isso acontece porque na verdade
a relação que temos é vários users tem vários roles. Então, para facilitar a
representação desta relação, "cria-se" uma tabela intermédia que representa
essa relação, em que a PK é o conjunto do user_id e role_id. Ou seja, a primary
key da entidade é a composição das duas. Exemplo:
1 - user_id: 1 e role_id: 1
2 - user_id: 1 e role_id: 2
3 - user_id: 2 e role_id: 1
4 - user_id: 1 e role_id: 2 ---> Não Permitido!
