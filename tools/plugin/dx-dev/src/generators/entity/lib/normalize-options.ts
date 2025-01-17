import { getAllNames } from '../../../utils';
import {
  EntityGeneratorSchema,
  NormalizedEntityGeneratorSchema,
} from '../schema';

export function normalizeOptions(
  options: EntityGeneratorSchema
): NormalizedEntityGeneratorSchema {
  const allNames = getAllNames(options.name);
  return { ...options, ...allNames };
}
