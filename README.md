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

Os commits podem ser feitos em português, mas use inglês para termos técnicos, não tente traduzi-los quando eles são conhecidos e usados em inglês.

```sh
pnpm cmt
```

Responda as perguntas para fazer o commit.

## Responsabilidades e relacionamentos

Trata-se de responsabilidade e relacionamentos, ou seja, qual a responsabilidade de cada camada e quais camadas podem depender diretamente uma das outras. Esta é uma convenção chamada [enforce module boundaries](https://nx.dev/features/enforce-module-boundaries#enforce-module-boundaries) e quem permite que as regras sejam aplicadas é o [nx](https://nx.dev).

A tabela a seguir representa a configuração no arquivo [`.eslintrc.json`](.eslintrc.json).

|            | api | util | domain | data | ui  | feature | resource | app |
| ---------: | :-: | :--: | :----: | :--: | :-: | :-----: | :------: | :-: |
|      `api` |  ✓  |  𝗫   |   𝗫    |  𝗫   |  𝗫  |    𝗫    |    𝗫     |  𝗫  |
|     `util` |  ✓  |  ✓   |   𝗫    |  𝗫   |  𝗫  |    𝗫    |    𝗫     |  𝗫  |
|   `domain` |  ✓  |  ✓   |   ✓    |  𝗫   |  𝗫  |    𝗫    |    𝗫     |  𝗫  |
|     `data` |  ✓  |  ✓   |   ✓    |  ✓   |  𝗫  |    𝗫    |    𝗫     |  𝗫  |
|       `ui` |  ✓  |  ✓   |   𝗫    |  𝗫   |  ✓  |    𝗫    |    𝗫     |  𝗫  |
|  `feature` |  ✓  |  ✓   |   𝗫    |  ✓   |  ✓  |    ✓    |    𝗫     |  𝗫  |
| `resource` |  ✓  |  ✓   |   𝗫    |  ✓   |  𝗫  |    𝗫    |    ✓     |  𝗫  |
|      `app` |  ✓  |  ✓   |   𝗫    |  ✓   |  ✓  |    ✓    |    ✓     |  𝗫  |

Caso tenha interesse em aprofundar neste assunto e descobrir os motivos, recomendo que leia um conteúdo que escrevi ano passado, você pode fazer download através do link [Arquitetura em camadas, uma abordagem sobre responsabilidades e relacionamentos](https://conteudode.dev/pdf/nx).
