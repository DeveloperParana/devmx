```
     _                           
  __| | _____   ___ __ ___ __  __
 / _` |/ _ \ \ / / '_ ` _ \\ \/ /
| (_| |  __/\ V /| | | | | |>  < 
 \__,_|\___| \_/ |_| |_| |_/_/\_\
```
# dev member experience


## Para executar em dev

### Requisitos
1. [pnpm](https://pnpm.io/installation) instalado
1. [docker](https://docs.docker.com/engine/install) instalado

### Configurações

Clone o projeto

```sh
git clone https://github.com/DeveloperParana/devmx
```

Configure a senha do banco e segredo jwt como quiser para uso local

```sh
mv .env-example .env
```

Preencha os valores para `DB_USER`, `DB_PASS`, `JWT_SECRET` e salve antes de executar o docker.

```sh
docker compose up -d
```

Instale as dependências

```sh
pnpm install
```

Execute o back-end e front-end

```sh
pnpm dev
```

## Para commits

```sh
pnpm cmt
```

Responda as perguntas para fazer o commit.


## Responsabilidades e relacionamentos

Trata-se de responsabilidade e relacionamentos, ou seja, qual a responsabilidade de cada camada e quais camadas podem depender diretamente uma das outras. Na tabela a seguir vemos que camadas do tipo `util` podem depender apenas de camadas que também sejam do tipo `util`, camadas do tipo `domain` podem depender apenas de camadas do tipo `util` e `api`, camadas do tipo `data-source` podem depender apenas dos tipos `util`, `domain` e `api`, e assim por diante...

Caso tenha interesse em aprofundar neste assunto e descobrir os motivos, recomendo que leia um conteúdo que escrevi ano passado, você pode fazer download através do link a seguir. [Arquitetura em camadas, uma abordagem sobre responsabilidades e relacionamentos](https://conteudode.dev/pdf/nx)

|               | util | domain | data-source | data-access | resource | feature | app | api |
| ------------: | :--: | :----: | :---------: | :---------: | :------: | :-----: | :-: | :-: |
|        `util` |  ✓   |   ✓    |      ✓      |      ✓      |    ✓     |    ✓    |  ✓  |  ✓  |
|      `domain` |  𝗫   |   𝗫    |      ✓      |      ✓      |    𝗫     |    𝗫    |  𝗫  |  ✓  |
| `data-source` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    ✓     |    𝗫    |  ✓  |  ✓  |
| `data-access` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    𝗫     |    ✓    |  ✓  |  ✓  |
|    `resource` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    ✓     |    𝗫    |  ✓  |  ✓  |
|     `feature` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    𝗫     |    ✓    |  ✓  |  ✓  |
|         `app` |  𝗫   |   𝗫    |      𝗫      |      𝗫      |    𝗫     |    𝗫    |  𝗫  |  𝗫  |
|         `api` |  𝗫   |   ✓    |      ✓      |      ✓      |    ✓     |    ✓    |  ✓  |  ✓  |
