const {readdirSync} = require('node:fs')
const {resolve} = require('node:path')

const packages = readdirSync(resolve(__dirname, '..', 'packages'))

// prettier-ignore
/** @type {import('cz-git').UserConfig['prompt']} */
module.exports = {
  alias: { fd: 'docs: fix typos' },
  messages: {
    type: 'Selecione o tipo de alteração que você está comitando:',
    scope: 'Informe o ESCOPO desta alteração (opcional):',
    customScope: 'Escreva o ESCOPO desta alteração:',
    subject: 'Escreva uma descrição CURTA e IMPERATIVA da mudança:\n',
    body: 'Forneça uma descrição MAIS LONGA da mudança (opcional). Use "|" para quebrar uma nova linha:\n',
    breaking: 'Liste quaisquer BREAKING CHANGES (opcional). Use "|" para quebrar nova linha:\n',
    footerPrefixesSelect: 'Select the ISSUES type of change List by this change (optional):',
    customFooterPrefix: 'Input ISSUES prefix:',
    footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
    generatingByAI: 'Generating your AI commit subject...',
    generatedSelectByAI: 'Select suitable subject by AI generated:',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },
  types: [
    { value: 'feat', name: 'feat:     Nova funcionalidade', emoji: ':sparkles:' },
    { value: 'fix', name: 'fix:      Correção de bug', emoji: ':bug:' },
    { value: 'docs', name: 'docs:     Apenas mudanças em documentação', emoji: ':memo:' },
    { value: 'style', name: 'style:    Mudança no código que não afeta seu funcionamento', emoji: ':lipstick:' },
    { value: 'refactor', name: 'refactor: Alteração de código que não corrige bug nem adiciona recurso', emoji: ':recycle:' },
    { value: 'perf', name: 'perf:     Mudança no código que melhora o desempenho', emoji: ':zap:' },
    { value: 'test', name: 'test:     Adiciona testes ou corrige testes existentes', emoji: ':white_check_mark:' },
    { value: 'build', name: 'build:    Alteração que afeta o build ou dependências externas', emoji: ':package:' },
    { value: 'ci', name: 'ci:       Alteração em arquivos de configuração e scripts de CI', emoji: ':ferris_wheel:' },
    { value: 'chore', name: 'chore:    Alteração fora dos diretórios src/**/*', emoji: ':hammer:' },
    { value: 'revert', name: 'revert:   Reverte um commit anterior', emoji: ':rewind:' }
  ],
  useEmoji: false,
  emojiAlign: 'center',
  useAI: false,
  aiNumber: 1,
  themeColorCode: '',
  scopes: [...packages],
  allowCustomScopes: true,
  allowEmptyScopes: true,
  customScopesAlign: 'bottom',
  customScopesAlias: 'custom',
  emptyScopesAlias: 'empty',
  upperCaseSubject: false,
  markBreakingChangeMode: false,
  allowBreakingChanges: ['feat', 'fix'],
  breaklineNumber: 100,
  breaklineChar: '|',
  skipQuestions: [],
  issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
  customIssuePrefixAlign: 'top',
  emptyIssuePrefixAlias: 'skip',
  customIssuePrefixAlias: 'custom',
  allowCustomIssuePrefix: false,
  allowEmptyIssuePrefix: false,
  confirmColorize: true,
  maxHeaderLength: Infinity,
  maxSubjectLength: Infinity,
  minSubjectLength: 0,
  scopeOverrides: undefined,
  defaultBody: '',
  defaultIssues: '',
  defaultScope: '',
  defaultSubject: ''
}
