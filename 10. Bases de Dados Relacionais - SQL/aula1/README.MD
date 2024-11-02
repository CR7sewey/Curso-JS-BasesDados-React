## Bases de Dados

### O que é uma base de dados?

- Uma base de dados é uma coleção organizada de informações que são armazenadas e geridas de forma a facilitar o acesso, a manipulação e a análise dessas informações. Essas informações, ou dados, são organizadas em estruturas específicas, como tabelas (no caso de bases de dados relacionais), para permitir que sejam recuperadas e manipuladas de maneira eficiente.

### Principais características de uma base de dados:

1. Organização Estruturada: Os dados são organizados para que possam ser facilmente acessados e manipulados.
2. Acesso Rápido e Controlado: Permite acesso rápido a grandes volumes de dados, com mecanismos de segurança para proteger informações sensíveis.
3. Consistência e Integridade: Garante que os dados armazenados sigam regras e restrições definidas, o que ajuda a manter a qualidade e a confiabilidade da informação.
4. Multiusuário e Concorrência: Suporta acesso simultâneo de múltiplos usuários, permitindo que várias pessoas trabalhem nos mesmos dados sem conflitos.

- Em resumo, uma base de dados é essencial para centralizar, proteger e organizar dados, facilitando tanto o uso quanto a análise em diferentes contextos, como em empresas, aplicativos, ou qualquer ambiente que precise de gestão de informações.

### Tipos de bases de dados

Existem vários tipos de bases de dados, cada uma projetada para atender a diferentes necessidades de armazenamento, organização e acesso aos dados. Aqui estão os principais tipos:

1. Base de Dados Relacional

- Descrição: Armazena dados em tabelas organizadas em linhas e colunas, onde as tabelas estão relacionadas entre si por meio de chaves primárias e estrangeiras.
- Exemplos: MySQL, PostgreSQL, Oracle, SQL Server.
- Uso Comum: Sistemas empresariais, gestão de clientes, finanças, e-commerce.

2. Base de Dados Não Relacional (NoSQL)

- Descrição: Projetada para armazenar grandes volumes de dados não estruturados ou semiestruturados, que podem não se encaixar bem em tabelas. Pode usar diferentes formatos de armazenamento, como documentos, grafos, pares chave-valor, entre outros.
- Exemplos:
  - Documentos: MongoDB, Couchbase.
  - Grafos: Neo4j, ArangoDB.
  - Chave-valor: Redis, DynamoDB.
  - Colunar: Cassandra, HBase.
- Uso Comum: Big Data, redes sociais, internet das coisas (IoT), análise de dados em tempo real

3. Base de Dados Orientada a Objetos (ex: ObjectDB, db4o)
4. Base de Dados Distribuída (ex: Apache Cassandra)
5. Base de Dados em Nuvem (ex: Microsoft Azure SQL Database, Amazon AWS)
6. ...

### Linguagens usadas

A linguagem mais comum e amplamente usada para interagir com bases de dados é a Structured Query Language (SQL). Contudo, dependendo do tipo de base de dados, diferentes linguagens e métodos de consulta podem ser aplicados:

1. SQL (Structured Query Language)

   - Uso: Principal linguagem para bases de dados relacionais, como MySQL, PostgreSQL, Oracle, SQL Server.
   - Características: É usada para consultas (SELECT), inserções (INSERT), atualizações (UPDATE), exclusões (DELETE) e para definir a estrutura das tabelas e restrições (DDL – Data Definition Language).
   - Exemplo de comando:

   ```sql
   SELECT * FROM clientes WHERE cidade = 'Lisboa';
   ```

2. Linguagens de Consulta para Bases de Dados NoSQL

- Descrição: Bases de dados NoSQL geralmente têm seus próprios métodos de consulta, que variam conforme o modelo de dados (documentos, grafos, chave-valor, colunar).
- Principais linguagens/métodos:

  - MongoDB (documentos): Usa comandos de consulta em JSON. Exemplo

  ```sql
   db.clientes.find({ "cidade": "Lisboa" })
  ```

  - Neo4j (grafos): Usa a linguagem Cypher para consultas de grafos. Exemplo:

```sql
    MATCH (p:Pessoa {cidade: 'Lisboa'}) RETURN p
```

    - Cassandra (colunar): Usa uma linguagem semelhante ao SQL chamada CQL (Cassandra Query Language). Exemplo:

```sql
    SELECT * FROM clientes WHERE cidade = 'Lisboa';
```

... Mais dependendo do tipo de linguagem usada. No curso vamos focar em bases
de dados relacionais e na linguagem SQL

### Porquê aprender SQL?

- SQL é a linguagem standard para a manutenção/manipulação de bases de dados relacionais
- Podemos descarregar, filtrar e analisar uma enorme quantidade de dados ao usar SQL
- SQL é relativamente fácil, muito poderoso, e sobretudo... essencial saber
