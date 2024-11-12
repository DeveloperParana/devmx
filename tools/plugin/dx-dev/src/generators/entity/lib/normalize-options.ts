import { pluralize } from '../../../utils';
import { names } from '@nx/devkit';
import {
  EntityGeneratorSchema,
  NormalizedEntityGeneratorSchema,
} from '../schema';

function getAllNames(original: string) {
  const normalized = names(original);
  const pluralNames = {
    namePlural: pluralize(normalized.name, 2),
    classNamePlural: pluralize(normalized.className, 2),
    fileNamePlural: pluralize(normalized.fileName, 2),
    propertyNamePlural: pluralize(normalized.propertyName, 2),
    constantNamePlural: pluralize(normalized.constantName, 2),
  };
  return { ...normalized, ...pluralNames };
}

export function normalizeOptions(
  options: EntityGeneratorSchema
): NormalizedEntityGeneratorSchema {
  const allNames = getAllNames(options.name);
  return { ...options, ...allNames };
}
