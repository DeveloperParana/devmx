## `register`

Cria um par de chaves criptográficas para registrar a chave pública para autenticação posterior sem senha.

| Propriedade        | Tipo                                         | Padrão       | Detalhes                                                                                                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`             | `string \| User`                             |              | Nome de usuário ou objeto de usuário (`id`, `name`, `displayName`)                                                                                                                                                                                                                            |
| `challenge`        | `string`                                     |              | Uma string gerada aleatoriamente pelo lado do servidor.                                                                                                                                                                                                                                       |
| `domain`           | `string`                                     |              | Usado para autenticação de pai / subdomínio e outros casos de uso exóticos                                                                                                                                                                                                                    |
| `timeout`          | `number`                                     | `60000`      | Número de milissegundos que o usuário tem para responder à verificação biométrica/PIN.                                                                                                                                                                                                        |
| `userVerification` | `'required' \| 'preferred' \| 'discouraged'` | `'required'` | Se deve ou não solicitar verificação biométrica/PIN.                                                                                                                                                                                                                                          |
| `hints`            | `PublicKeyCredentialHints[]`                 |              | Pode conter uma lista de `"client-device"`, `"hybrid"` ou `"security-key"`                                                                                                                                                                                                                    |
| `attestation`      | `boolean`                                    | `false`      | Se habilitado, o atestado do dispositivo e o clientData serão fornecidos como dados binários codificados em Base64url. Observe que isso não está disponível em algumas plataformas.                                                                                                           |
| `discoverable`     | `'discouraged' \| 'preferred' \| 'required'` |              | Uma credencial "descobrível" pode ser selecionada usando `authenticate(...)` sem fornecer IDs de credencial. Em vez disso, um pop-up nativo aparecerá para seleção do usuário. Isso pode ter um impacto na experiência do usuário de "passkeys" e no comportamento de sincronização da chave. |

```ts
export interface CommonOptions {
  challenge: string;
  domain?: string;
  hints?: PublicKeyCredentialHints[];
  timeout?: number;
  userVerification?: UserVerificationRequirement;
  debug?: boolean;
}

export interface RegisterOptions extends CommonOptions {
  attestation?: boolean;
  discoverable?: ResidentKeyRequirement;
  user: string | User;
}

export interface User {
  id?: string;
  name: string;
  displayName?: string;
}
```
