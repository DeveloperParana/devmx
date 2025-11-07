# Fluxo de Login - Autenticação Passwordless

## Visão Geral

O sistema de autenticação do DevMX é **passwordless** (sem senha), utilizando códigos de verificação enviados por email para autenticar os usuários. Os usuários podem fazer login utilizando tanto seu **username** quanto seu **email**.

## Arquitetura do Sistema

### Camadas da Aplicação

1. **Frontend (Angular)**: Interface do usuário e validação de entrada
2. **Backend (NestJS)**: API REST e lógica de negócio
3. **Banco de Dados (MongoDB)**: Armazenamento de dados dos usuários

## Fluxo de Autenticação Completo

### Etapa 1: Solicitação de Código

```
┌─────────┐         ┌──────────┐         ┌─────────┐         ┌──────────┐
│ Usuário │         │ Frontend │         │ Backend │         │ MongoDB  │
└────┬────┘         └────┬─────┘         └────┬────┘         └────┬─────┘
     │                   │                     │                   │
     │ Digita username   │                     │                   │
     │ ou email          │                     │                   │
     ├──────────────────>│                     │                   │
     │                   │                     │                   │
     │                   │ POST /authentication│                   │
     │                   │ {name: "user@email"}│                   │
     │                   ├────────────────────>│                   │
     │                   │                     │                   │
     │                   │                     │ Detecta tipo      │
     │                   │                     │ (email/username)  │
     │                   │                     │                   │
     │                   │                     │ findByEmail() ou  │
     │                   │                     │ findByName()      │
     │                   │                     ├──────────────────>│
     │                   │                     │                   │
     │                   │                     │<──────────────────┤
     │                   │                     │ User data         │
     │                   │                     │                   │
     │                   │                     │ Gera código (4    │
     │                   │                     │ dígitos)          │
     │                   │                     │                   │
     │                   │                     │ updateCode()      │
     │                   │                     ├──────────────────>│
     │                   │                     │                   │
     │                   │                     │ Envia email com   │
     │                   │                     │ código            │
     │                   │                     │                   │
     │                   │<────────────────────┤                   │
     │                   │ {message: "Enviado  │                   │
     │                   │  para xx@xx.com"}   │                   │
     │<──────────────────┤                     │                   │
     │ Mensagem exibida  │                     │                   │
     │                   │                     │                   │
```

### Etapa 2: Validação do Código

```
┌─────────┐         ┌──────────┐         ┌─────────┐         ┌──────────┐
│ Usuário │         │ Frontend │         │ Backend │         │ MongoDB  │
└────┬────┘         └────┬─────┘         └────┬────┘         └────┬─────┘
     │                   │                     │                   │
     │ Digita código     │                     │                   │
     │ (4 dígitos)       │                     │                   │
     ├──────────────────>│                     │                   │
     │                   │                     │                   │
     │                   │ POST /authentication│                   │
     │                   │      /validate      │                   │
     │                   │ {name: "user@email",│                   │
     │                   │  code: "1234"}      │                   │
     │                   ├────────────────────>│                   │
     │                   │                     │                   │
     │                   │                     │ Detecta tipo      │
     │                   │                     │ (email/username)  │
     │                   │                     │                   │
     │                   │                     │ findByEmail() ou  │
     │                   │                     │ findByName()      │
     │                   │                     ├──────────────────>│
     │                   │                     │                   │
     │                   │                     │<──────────────────┤
     │                   │                     │ User + code data  │
     │                   │                     │                   │
     │                   │                     │ Valida código:    │
     │                   │                     │ - Valor correto?  │
     │                   │                     │ - Não expirado?   │
     │                   │                     │                   │
     │                   │                     │ Remove código     │
     │                   │                     ├──────────────────>│
     │                   │                     │                   │
     │                   │                     │ Gera JWT token    │
     │                   │                     │                   │
     │                   │<────────────────────┤                   │
     │                   │ {accessToken: "..."} │                  │
     │<──────────────────┤                     │                   │
     │ Autenticado!      │                     │                   │
     │                   │                     │                   │
```

## Componentes do Sistema

### Frontend

#### 1. AuthenticationForm
**Localização**: `packages/account/feature-auth/src/lib/forms/authentication.ts`

**Função**: Validação de entrada do usuário

**Validador customizado** (`usernameOrEmailValidator`):
- Detecta se o input contém `@` (indicador de email)
- Se for email: valida formato de email
  - Pattern: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- Se for username: valida formato de username
  - Pattern: `/^[a-z0-9]+$/` (apenas letras minúsculas e números)

**Retorno**:
- `null` se válido
- `{ invalidEmailOrUsername: true }` se inválido

#### 2. AuthenticationContainer
**Localização**: `packages/account/feature-auth/src/lib/containers/authentication/`

**Função**: Componente de UI que gerencia o fluxo de autenticação

**Comportamento**:
- Stepper de 2 etapas:
  1. Entrada de username/email
  2. Entrada de código de 4 dígitos
- Validação automática ao digitar o 4º dígito do código

### Backend

#### 1. SendUserCodeUseCase
**Localização**: `packages/account/domain/src/server/use-cases/send-user-code.ts`

**Função**: Processa solicitação de código de autenticação

**Fluxo**:
1. Recebe input do usuário (string)
2. Detecta tipo: `isEmail = name.includes('@')`
3. Busca usuário:
   - Se email: `usersService.findByEmail(name)`
   - Se username: `usersService.findByName(name)`
4. Gera código de 4 dígitos aleatórios
5. Armazena código no banco com timestamp
6. Envia email com código
7. Retorna mensagem de sucesso

**Segurança**:
- Retorna erro genérico se usuário não encontrado (evita enumeration attack)
- Código tem tempo de expiração

#### 2. AuthenticationUseCase
**Localização**: `packages/account/domain/src/server/use-cases/authentication.ts`

**Função**: Valida código e autentica usuário

**Fluxo**:
1. Recebe input: username/email + código
2. Detecta tipo: `isEmail = data.name.includes('@')`
3. Busca usuário:
   - Se email: `usersService.findByEmail(data.name)`
   - Se username: `usersService.findByName(data.name)`
4. Valida:
   - Usuário existe?
   - Código existe?
   - Código corresponde?
   - Código não expirado?
5. Remove código do banco (uso único)
6. Gera JWT token com payload do usuário
7. Retorna access token

**Validações de Segurança**:
- Código de uso único
- Verificação de expiração baseada em timestamp
- Remoção do código após uso bem-sucedido

#### 3. UsersService
**Localização**: `packages/account/domain/src/server/services/users.ts`

**Métodos de Busca**:

**`findByName(name: string)`**
- Busca usuário por username
- Usa regex para busca case-insensitive no MongoDB

**`findByEmail(email: string)`**
- Busca usuário por email
- Query: `{ 'contact.email': email }`
- Busca exata (case-sensitive)

**`updateCode(id: string, code: UserCode)`**
- Atualiza código de autenticação
- Armazena: `{ value: string, timestamp: Date }`

#### 4. AuthenticationController
**Localização**: `packages/account/resource/src/lib/controllers/authentication.ts`

**Endpoints**:

**`POST /authentication`**
- Solicita código de autenticação
- Body: `{ name: string }` (username ou email)
- Resposta: `{ message: string }`

**`POST /authentication/validate`**
- Valida código e autentica
- Body: `{ name: string, code: string }`
- Resposta: `{ accessToken: string }`

### Database

#### User Schema
**Campos relevantes**:

```typescript
{
  name: string,              // Username único
  contact: {
    email: string,           // Email único
    phone?: string
  },
  code?: {
    value: string,           // Código de 4 dígitos
    timestamp: Date          // Quando foi gerado
  }
}
```

**Índices**:
- `name`: Único, para busca por username
- `contact.email`: Único, para busca por email

## Lógica de Detecção de Tipo

### Estratégia Simples
A detecção de tipo utiliza uma estratégia simples e eficaz:

```typescript
const isEmail = input.includes('@');
```

**Justificativa**:
- Usernames no sistema não permitem `@` (pattern: `/^[a-z0-9]+$/`)
- Emails sempre contêm `@` por definição
- Método rápido e sem overhead
- Não requer bibliotecas externas ou regex complexos

**Fluxo de decisão**:
```
Input contém '@'?
├─ Sim → Tratar como email
│         └─ Validar formato de email
│         └─ Buscar por findByEmail()
│
└─ Não → Tratar como username
          └─ Validar formato de username
          └─ Buscar por findByName()
```

## Configuração e Variáveis de Ambiente

### Tempo de Vida do Código
- Configurável via `env.auth.codeLifeTime`
- Valor recomendado: 5-15 minutos
- Validação: `Date.now() < timestamp + codeLifeTime`

### Ambiente de Produção vs Desenvolvimento

**Produção** (`env.production === true`):
- Envia email real para o usuário
- Retorna: `"Enviado para xx@example.com"` (email parcialmente oculto)

**Desenvolvimento** (`env.production === false`):
- Não envia email
- Retorna: `"Fala Dev! Usa esse código aqui: 1234"`
- Facilita testes sem necessidade de servidor SMTP

## Considerações de Segurança

### 1. Prevenção de Enumeration Attack
- Mensagens de erro genéricas
- Mesmo comportamento para usuário existente/inexistente
- Não revela se email/username está cadastrado

### 2. Rate Limiting (Recomendado)
- Implementar limite de tentativas por IP
- Implementar limite de solicitações por email/username
- Previne abuso do sistema de envio de emails

### 3. Validação de Código
- Código de uso único
- Verificação de expiração
- Remoção após uso bem-sucedido ou expiração

### 4. HTTPS
- Sempre usar HTTPS em produção
- Protege transmissão de códigos e tokens

### 5. JWT Tokens
- Tokens assinados com secret seguro
- Incluem informações mínimas necessárias
- Validados em cada requisição autenticada

## Exemplos de Uso

### Exemplo 1: Login com Username

**Input do usuário**:
```
username: johndoe
```

**Fluxo**:
1. Frontend valida: `johndoe` ✓ (lowercase alphanumeric)
2. Backend detecta: não contém `@` → username
3. Busca: `findByName('johndoe')`
4. Gera código: `7392`
5. Email enviado para: `john.doe@example.com`
6. Usuário digita: `7392`
7. Autenticação bem-sucedida ✓

### Exemplo 2: Login com Email

**Input do usuário**:
```
email: john.doe@example.com
```

**Fluxo**:
1. Frontend valida: `john.doe@example.com` ✓ (formato de email)
2. Backend detecta: contém `@` → email
3. Busca: `findByEmail('john.doe@example.com')`
4. Gera código: `4826`
5. Email enviado para: `john.doe@example.com`
6. Usuário digita: `4826`
7. Autenticação bem-sucedida ✓

### Exemplo 3: Input Inválido

**Input do usuário**:
```
username: John@Doe
```

**Fluxo**:
1. Frontend valida: contém `@` → trata como email
2. Valida formato de email: ✗ (falta domínio completo)
3. Erro exibido: "Digite um usuário ou email válido"
4. Não envia requisição ao backend

## Melhorias Futuras

### Possíveis Otimizações

1. **Cache de Usuários**
   - Implementar cache Redis para buscas frequentes
   - Reduzir carga no MongoDB

2. **Índice Composto**
   - Criar índice único em `name` e `contact.email`
   - Otimizar performance de buscas

3. **Validação Assíncrona**
   - Verificar disponibilidade de email/username durante cadastro
   - Feedback em tempo real

4. **Múltiplos Fatores**
   - Adicionar opção de autenticação via SMS
   - WebAuthn para dispositivos compatíveis

5. **Analytics**
   - Rastrear preferência de login (email vs username)
   - Identificar padrões de uso

## Troubleshooting

### Problema: Código não chega no email

**Soluções**:
1. Verificar configuração SMTP
2. Checar pasta de spam
3. Em dev: código aparece na resposta da API

### Problema: Código expirado

**Soluções**:
1. Solicitar novo código
2. Aumentar `codeLifeTime` se necessário

### Problema: Email não reconhecido

**Soluções**:
1. Verificar se usuário está cadastrado
2. Tentar com username
3. Usar opção "Recuperar conta"

## Referências

- [NestJS Authentication](https://docs.nestjs.com/security/authentication)
- [Passwordless Authentication Best Practices](https://auth0.com/passwordless)
- [MongoDB Nested Field Queries](https://docs.mongodb.com/manual/tutorial/query-embedded-documents/)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)
