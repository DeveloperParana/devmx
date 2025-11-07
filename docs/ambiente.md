## Ambiente

Passos necessários pra execução do projeto no seu ambiente de desenvolvimento.

### Projeto

```sh
git clone https://github.com/DeveloperParana/devmx
```

### Requisitos

1. [node.js](https://nodejs.org/pt/download) v22+
1. [pnpm](https://pnpm.io/installation) v8.14
1. [docker](https://docs.docker.com/engine/install)

> [!TIP]
> Se você já tem o Node.js instalado, mas não na versão 22, considere usar o [NVM](https://github.com/nvm-sh/nvm). Ele permite gerenciar múltiplas versões do Node.js, o que é útil para projetos diferentes que requerem versões distintas. Isso pode evitar problemas futuros em outros projetos que utilizem versões diferentes do Node.js.

#### Uso do NVM

O NVM (Node Version Manager) permite gerenciar múltiplas versões do Node.js no mesmo ambiente de desenvolvimento. Isso é especialmente útil quando você trabalha em diferentes projetos que requerem versões distintas do Node.js.
Para mais informações, consulte a [documentação oficial do NVM](https://github.com/nvm-sh/nvm).

---

Para preparar o ambiente, o primeiro passo é criar o arquivo de variáveis de ambiente `.env`. O projeto inclui um arquivo de exemplo chamado `.env-example` que deve ser usado como base.

Você pode criar o seu arquivo `.env` copiando o exemplo.

**No Linux ou macOS:**

```sh
cp .env-example .env
```

**No Windows (PowerShell):**

```powershell
Copy-Item .env-example .env
```

Após criar o arquivo `.env`, você está pronto para iniciar o ambiente.

Para começar execute:

```sh
pnpm dev
```

---

### Docker

Garanta que o arquivo `.env` está preenchido com as variáveis corretamente

> [!IMPORTANT]
> Garanta que o arquivo `.env` está preenchido com as variáveis corretamente, as mais importantes e causadoras de erros são `DB_USER`, `DB_PASS` e `JWT_SECRET`.

Para executar o mongodb com docker: `docker compose up -d`

### Tecnologiass

**TypeScript**

**Angular Framework**

**Nest Framework**

**Nx Dev Tools**

<div style="width: 100%; display: flex; justify-content: space-between">

![TypeScript](../assets/logos/typescript.svg)

![TypeScript](../assets/logos/angular.svg)

![TypeScript](../assets/logos/nest.svg)

![TypeScript](../assets/logos/nx.svg)

</div>
