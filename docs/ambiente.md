## Ambiente

Passos necessários pra execução do projeto no ambiente local pra desenvolvimento.

### Projeto

```sh
git clone https://github.com/DeveloperParana/devmx
```

### Requisitos

1. [node.js](https://nodejs.org/pt/download) v22+
1. [pnpm](https://pnpm.io/installation) v8.14
1. [docker](https://docs.docker.com/engine/install)

Para preparar o ambiente: `./tools/scripts/setup.sh`

### Docker

Garanta que o arquivo `.env` está preenchido com as variáveis corretamente

> [!IMPORTANT]
> Garanta que o arquivo `.env` está preenchido com as variáveis corretamente, as mais importantes e causadoras de erros são `DB_USER`, `DB_PASS` e `JWT_SECRET`.

Para executar o mongodb com docker: `docker compose up -d`
