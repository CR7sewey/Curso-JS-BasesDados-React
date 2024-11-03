## Bases de Dados

### Inner Join, Left Join, Right Join

Então quando estamos a falar de relacionamentos entre entidades, estamos a falar
de JOINs. Os principais são Inner Join, Left Join, Right Join.

Ver foto. Cada uma das bolas representa uma entidade. Na bola a azul temos a entidade
users e na vermelha a profiles.
Vamos supor que eu quero achar o resultado do relacionamento entre users e profiles, há
várias coisas que podemos considerar: só os elementos que estão presentes em ambas
as tabelas (ou seja, relacionamento sempre existe, user sempre com um profile) - Inner Join;
ou quero todos os users independentemente se tem profile ou não (no entanto a referencia ao profile
surge como null) ou o contrário (Left e Right Join)

Nota: Neste momento na nossa db todos users tem um profile.
Vamos alterar isso. Correr a sequinte query:

```sql
delete from profiles
where user_id between 30 and 50;
```

Neste momento, já não existem rows a mapear os user_id entre 30 e 50 na tabela
profiles;

### Inner Join

Então, vamos validar quais são os users que tem profile (Inner Join)

```sql
select * from users inner join profiles on users.id = profiles.user_id;
```

Verificamos que não existem os users com id entre 30 e 50 na tabela
Podemos ainda filtrar e dizer que desta interseção so queremos os first_name acabados em "a"

```sql
select * from users inner join profiles on users.id = profiles.user_id
where users.first_name LIKE '%a';
```

### Left Join

Então, vamos validar quais são os users que podem/ou nao ter profile (Left Join)

```sql
select users.id, users.email, profiles.id as id_profiles from users left join profiles on users.id = profiles.user_id;
```

Verificamos que aparecem todos os users, mas que o id_profiles dos users com id entre 30 e 50 estão a null (pois não tem profile);

### Right Join

Então, vamos validar quais são os profiles que podem/ou nao ter um user (Right Join)
Nota: não vale a pena apagar o user com profile porque como está com cascade, elimina o seu profile também!
Primeiro, vamos criar profiles sem user:

```sql
INSERT into profiles
(bio, description)
values ("Teste 1","Teste 1"),
("Teste 2", "Teste 2");
```

```sql
select users.id, users.email, profiles.id as id_profiles from users right join profiles on users.id = profiles.user_id;
```

Verificamos que aparecem todos os profiles, mas que o id_profiles novos têm os valores associados aos users a null (id e email), isto porque não tem user.
