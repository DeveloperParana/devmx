import { readFileSync } from 'node:fs';
import { join } from 'node:path';

type Filename = `${string}.html`;

type Context = Record<string, unknown>;

/**
 * O template deve estar no diretório `apps/server/src/assets/templates/`
 * O contexto deve satisfazer aos valores {{property}} como no template
 */
export const render = <T extends Context>(file: Filename, context: T) => {
  const template = readFileSync(join(__dirname, 'assets', 'templates', file));
  return template.toString('utf-8').replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return context[key] ? String(context[key]) : '';
  });
};
