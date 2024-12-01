## Desenvolvimento

### Comandos úteis

Alguns scripts úteis no processo de desenvolvimento

| Comando             | Resultado                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm install`      | Instala as dependências do projeto                                                                                                               |
| `pnpm dev`          | Executa as duas aplicações simultaneamente (back-end e front-end)                                                                                |
| `pnpm commit`       | Inicia o processo de commit                                                                                                                      |
| `pnpm affected`     | Inicia processo de execução para lint, test e build dos projetos afetados com base na diferença do estado do repositório atual local e em origin |
| `pnpm lint:fix`     | Executa lint e faz correções caso aplicável, esse comando é usado também para correções de dependências entre projetos                           |
| `pnpm dev:server`   | Executa apenas o app back-end para desenvolvimento                                                                                               |
| `pnpm build:server` | Executa o build do app back-end                                                                                                                  |

### Geradores

Como toda pessoa programadora sabe, tudo que segue um padrão pode ser automatizado, certo? Este repositório segue um padrão de arquitetura, e por isso recomendamos que seja usado algum dos scripts para criação de novas bibliotecas, são facilitadores que ajuda evitar reescrita de código, veja a seguir.

#### Novas bibliotecas

Os scripts são nomeados conforme o tipo de biblioteca que está sendo criada e estão no diretório `tools/scripts/`.

| Script             | Obrigatório       | Opcional | Objetivo                                                                                                                                        |
| ------------------ | ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain.sh`        | `nome-do-dominio` | `-d`     | Cria um novo domínio no repositório                                                                                                             |
| `data-source.sh`   | `nome-do-dominio` | `-d`     | Cria a camada de acesso a dados para o back-end e relacionada ao domínio especificado                                                           |
| `data-access.sh`   | `nome-do-dominio` | `-d`     | Cria a camada de acesso a dados para o front-end e relacionada ao domínio especificado                                                          |
| `feature-shell.sh` | `nome-do-dominio` | `-d`     | Cria uma `feature` com sufixo `shell` para o domínio especificado e **DEVE** ser a rota primária no app `devmx`                                 |
| `feature-admin.sh` | `nome-do-dominio` | `-d`     | Cria uma `feature` com sufixo `admin` para o domínio especificado e **DEVE** ser a rota secundária, na `feature-shell` do mesmo domínio         |
| `resource.sh`      | `nome-do-dominio` | `-d`     | Cria uma camada back-end relacionada ao domínio especificado, **DEVE** configurar os _schemas_ da camada `data-source` e _endpoints_ do domínio |
| `ui-shared.sh`     | `nome-do-dominio` | `-d`     | Cria uma camada `ui` do front-end para o domínio especificado, serve para compartilhar componentes usados em mais de 2 lugares na aplicação     |
| `feature-page.sh`  | `nome-do-dominio` | `-d`     | Cria uma camada `feature` para rotas públicas no front-end, ou seja, que podem ser acessadas sem necessidade de autenticação                    |
| `shared-ui.sh`     | `nome-do-dominio` | `-d`     | Cria uma biblioteca front-end `ui` que será compartilhada entre várias bibliotecas `feature` em vários domínios do repositório                  |

#### Novas entidades em bibliotecas existentes

Desta vez não se trata de um código facilitador escrito em shell script mas de um gerador de código, o comando é:

```sh
nx g @devmx/plugin-dx-dev:entity nome-da-entidade --scope nome-do-dominio
```

> [!WARNING]
> Antes de executar o comando, use o parâmetro **-d** para simular e garantir que a saída está como esperado, veja o exemplo a seguir.

Para criar uma entidade `quiz` para o domínio `learn`.

```sh
devmx$ nx g @devmx/plugin-dx-dev:entity quiz --scope learn -d

 NX  Generating @devmx/plugin-dx-dev:entity

CREATE packages/learn/data-access/src/lib/application/quiz.facade.ts
CREATE packages/learn/data-access/src/lib/infrastructure/quiz.http.service.impl.ts
CREATE packages/learn/data-access/src/lib/resolvers/quiz-wrapped.ts
CREATE packages/learn/data-source/src/lib/application/quizzes.facade.ts
CREATE packages/learn/data-source/src/lib/dtos/quiz.ts
CREATE packages/learn/data-source/src/lib/dtos/create-quiz.ts
CREATE packages/learn/data-source/src/lib/dtos/update-quiz.ts
CREATE packages/learn/data-source/src/lib/infrastructure/quizzes.mongo.service.impl.ts
CREATE packages/learn/data-source/src/lib/schemas/quiz.ts
CREATE packages/learn/domain/src/client/services/quiz.ts
CREATE packages/learn/domain/src/client/use-cases/create-quiz.ts
CREATE packages/learn/domain/src/client/use-cases/delete-quiz.ts
CREATE packages/learn/domain/src/client/use-cases/find-quizzes.ts
CREATE packages/learn/domain/src/client/use-cases/find-quiz-by-id.ts
CREATE packages/learn/domain/src/client/use-cases/update-quiz.ts
CREATE packages/learn/domain/src/lib/dtos/create-quiz.ts
CREATE packages/learn/domain/src/lib/dtos/update-quiz.ts
CREATE packages/learn/domain/src/server/services/quizzes.ts
CREATE packages/learn/domain/src/server/use-cases/create-quiz.ts
CREATE packages/learn/domain/src/server/use-cases/delete-quiz.ts
CREATE packages/learn/domain/src/server/use-cases/find-quizzes.ts
CREATE packages/learn/domain/src/server/use-cases/find-quiz-by-id.ts
CREATE packages/learn/domain/src/server/use-cases/update-quiz.ts
CREATE packages/shared/api-interfaces/src/lib/dtos/editable-quiz.ts
CREATE packages/shared/api-interfaces/src/lib/entities/quiz.ts
UPDATE packages/learn/data-access/src/lib/resolvers/index.ts
UPDATE packages/learn/data-access/src/lib/application/index.ts
UPDATE packages/learn/data-access/src/lib/infrastructure/index.ts
UPDATE packages/learn/data-source/src/lib/application/index.ts
UPDATE packages/learn/data-source/src/lib/dtos/index.ts
UPDATE packages/learn/data-source/src/lib/infrastructure/index.ts
UPDATE packages/learn/data-source/src/lib/schemas/index.ts
UPDATE packages/learn/domain/src/client/services/index.ts
UPDATE packages/learn/domain/src/client/use-cases/index.ts
UPDATE packages/learn/domain/src/lib/dtos/index.ts
UPDATE packages/learn/domain/src/server/services/index.ts
UPDATE packages/learn/domain/src/server/use-cases/index.ts
UPDATE packages/shared/api-interfaces/src/lib/dtos/index.ts
UPDATE packages/shared/api-interfaces/src/lib/entities/index.ts

NOTE: The "dryRun" flag means no changes were made.
```

Se a saída segue o mesmo padrão acima, siga em frente e execute sem o parâmetro `-d`

> [!TIP]
> Seu próximo passo é configurar os providers nas camadas `data-access` e `data-source`.
