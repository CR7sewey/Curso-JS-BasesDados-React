## Bases de Dados

### Relacionamentos de Entidades

- Usamos uma linha para representar essas relações;
- Três tipos de relações:
  - um-para-um (One-to-One) (1)
  - uma-para-muitos (One-to-Many) (2)
  - muitas-para-muitas (Many-to-Many) (3)

(1) um registo está relacionado com um registo de uma tabela
ex: um utilizador tem só um perfil e um perfil tem só um utilizador
(2) um registo está relacionado com vários registos de uma tabela
ex: uma pessoa por ter vários veículos e cada veículo só tem uma pessoa
(3) vários registos estão relacionados com vários registos de um tabela
ex: um utilizador pode ter vários roles e um role pode ter vários users

### One-to-One

Não é muito usado, porque se os dados são de um para um, é quase o equivalente
a ter os dados todos registados numa tabela, o que pode ajudar no desempenho do sistema. No entanto, muitas vezes há registos opcionais e pode dar jeito ter duas tabelas para dividir esses dados.

Então, nas relações um-para-um, a pk de uma das entidades é a fk da outra (a fk
vai ser caso a caso. Ex: como podemos ter um utilizador (users) sem perfil (profile), faz sentido ter a fk do lado do profiles).
Em termos de diagrama, a relação um para um é representada pelos traços (ver um-para-um). Significa cardinalidade e obrigatoriedade.
1º do ponto de vista da entidade: cardinalidade (0 (--), 1 (-|-), ou n/vários (-<-))
2º do ponto de vista da entidade: obrigatoriedade( obrigatorio (1) (-|-) ou opcional (0) (-o-))

Ex: tenho de ter um usuario para um perfil: user -|-|-----|-|- profile. Se apagar
um perfil ou um usuario, o outro tem de ser eliminado! (para evitar inconsistencia na bd)
Ex: tenho de ter um usario para um perfil (opcional): user -|-|----o-|- profile. Se apagar um perfil, o user não é eliminado. o vice-versa já não é verdade

### One-to-Many

A ideia agora é sempre a mesma, no que toca a uma pk de uma tabela viajar para a outra. Neste caso, a pk da tabela que tem cardinalidade a 1 (-|-).
Aqui um dos lados tem a cardinalidade a 1 e a outra a n/vários. (um para muitos)
Ex: tenho de ter um usuario para vários perfis: user -|-|-----|< perfis. Significa que eu posso ter um usuario com um ou vários perfis
Ex: tenho de ter um usuario para vários perfis: user -|-|-----o< perfis. Significa que eu posso ter um usuario com zero, um ou vários perfis

### Many-to-Many

A relação é muitos para muitos, isto é, ambas as entidades podem ter varias associações à outra. A questão é que eu não consigo fazer isto diretamente, ou seja,
não é nos casos acima em que um entidade recebe como FK a PK da outra, pois existem muitos dados da tabela um que conhecem muitos dados da 2 e vice versa.
Ou seja, para ficar claro, em bd relacionais, não podemos ter um campo que seja uma array, ou seja, em exemplo:
user1 e user2 tem relacao com roles1 e roles2. eu nao posso por como FK na tabela
a mapear o user1 um array = [roles1, roles2]; isto não é permitido

Assim, para suprir esta questão, é como se fosse criada uma tabela intermédia (join table), no caso users_roles que no exemplo teria
user1 e roles1 -> users_roles - user_id: user1 e role_id: role1.
user1 e roles2 -> users_roles - user_id: user1 e role_id: role2.

Esta tabela não precisa de ser apenas Joining table, ou seja, podemos atrelar um atributo à tabela de date por exemplo (createdAt), que regista quando é feita essa associação. Podemos adicionar um id como PK p.e.
entao uma relaçao de muitos para muitos torna-se: um para muitos + muitos para um
A pk da tabela pode entao ser a composicao de ambas as FK;
