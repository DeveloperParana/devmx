## Back-end

### Banco de dados

**Seeds**

Preparei alguns seeds pra você importar na base de dados, mas primeiro verifique se você tem o comando `mongoimport`, caso não tenha, acesse [este link](https://www.mongodb.com/pt-br/docs/database-tools/installation/installation/#installing-the-database-tools) para saber como instalar.

> [!NOTE]
> Ele é necessário apenas para importar dados iniciais não obrigatórios, como dados de login com permissões distintas e todas as cidades do brasil com latitude e longitude.

Para importar execute, não se esqueça de colocar seu usuário no `--username=seu-user` configurado no `.env`. Ao executar, ele irá solicitar a senha que foi configurada no mesmo arquivo.

Para **cidades**: `mongoimport --host=localhost --port=27017 --username= --authenticationDatabase=admin --db=devparana --collection=citycollections --file=assets/seeds/city-collection.json`

Para **usuários**: `mongoimport --host=localhost --port=27017 --username= --authenticationDatabase=admin --db=devparana --collection=usercollections --file=assets/seeds/user-collection.json`
