import { join } from 'node:path';
import { ESLintRC } from './interfaces';
import { readJson } from './utils';

const esLintRC = readJson<ESLintRC>(join('.eslintrc.json'));

const {
  rules: { '@nx/enforce-module-boundaries': moduleBoundaries },
} = esLintRC.overrides[0] ?? {};

const [_, { depConstraints }] = moduleBoundaries ?? ['error', {}];

interface LibraryTypeRuleItem {
  type: string;
  withTags: string[];
}

let libraryTypes: LibraryTypeRuleItem[] = [];

if (depConstraints) {
  for (const { sourceTag, onlyDependOnLibsWithTags } of depConstraints) {
    const type = sourceTag.replace('type:', '');
    const withTags = onlyDependOnLibsWithTags.map((tag) =>
      tag.replace('type:', '')
    );
    libraryTypes.push({ type, withTags });
  }
}

for (const { type, withTags } of libraryTypes) {
  for (const tag of withTags) {
    console.log();
  }
}

const table = libraryTypes.map(({ type, withTags }) => {
  const row = libraryTypes.map(({ type }) => {
    return withTags.includes(type) ? '✓' : (`𝗫` as string);
  });
  row.unshift(`| \`${type}\``.padEnd(12, ' '));
  return row.join(` | `) + ` |`;
});

table.unshift(libraryTypes.map(({ type }) => type).join(' | '));

table[0] = `| ${table[0]} |`;

console.log(table.join('\n'));
