## Bases de Dados

### RAND e ROUND

São funcoes, à semelhança que existe nas linguagens de programação, para arredondar ou gerar
um numero aleatório

```sql
ALTER TABLE `base_de_dadps_curso2024`.`users`
ADD COLUMN `salary` DECIMAL(15,2) NULL;

-- Configura um salario aleatorio para users
UPDATE users set salary = round(rand()*10000,3) where id between 1 and 1000;

SELECT salary, id from users u
WHERE salary BETWEEN 1000 and 2000
ORDER by salary asc;
```
