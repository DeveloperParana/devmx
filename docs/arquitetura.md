## Arquitetura

Trata-se de responsabilidade e relacionamentos, ou seja, qual a responsabilidade de cada camada e quais camadas podem depender diretamente uma das outras. Esta é uma convenção chamada [enforce module boundaries](https://nx.dev/features/enforce-module-boundaries#enforce-module-boundaries) e quem permite que as regras sejam aplicadas é o [nx](https://nx.dev).

### Tipos de bibliotecas

Trata-se de responsabilidades e relacionamentos

A tabela a seguir representa a configuração no arquivo [`.eslintrc.json`](.eslintrc.json).

|            | api | util | domain | data | ui  | feature | resource | app |
| ---------: | :-: | :--: | :----: | :--: | :-: | :-----: | :------: | :-: |
|      `api` |  ✓  |  𝘅   |   𝘅    |  𝘅   |  𝘅  |    𝘅    |    𝘅     |  𝘅  |
|     `util` |  ✓  |  ✓   |   𝘅    |  𝘅   |  𝘅  |    𝘅    |    𝘅     |  𝘅  |
|   `domain` |  ✓  |  ✓   |   ✓    |  𝘅   |  𝘅  |    𝘅    |    𝘅     |  𝘅  |
|     `data` |  ✓  |  ✓   |   ✓    |  ✓   |  𝘅  |    𝘅    |    𝘅     |  𝘅  |
|       `ui` |  ✓  |  ✓   |   𝘅    |  𝘅   |  ✓  |    𝘅    |    𝘅     |  𝘅  |
|  `feature` |  ✓  |  ✓   |   𝘅    |  ✓   |  ✓  |    ✓    |    𝘅     |  𝘅  |
| `resource` |  ✓  |  ✓   |   𝘅    |  ✓   |  𝘅  |    𝘅    |    ✓     |  𝘅  |
|      `app` |  ✓  |  ✓   |   𝘅    |  ✓   |  ✓  |    ✓    |    ✓     |  𝘅  |

Caso tenha interesse em aprofundar neste assunto e descobrir os motivos, recomendo que leia um conteúdo que escrevi ano passado, você pode fazer download através do link [Arquitetura em camadas, uma abordagem sobre responsabilidades e relacionamentos](https://conteudode.dev/pdf/nx).
