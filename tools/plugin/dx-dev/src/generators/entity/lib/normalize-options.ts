import { names } from '@nx/devkit';
import {
  EntityGeneratorSchema,
  NormalizedEntityGeneratorSchema,
} from '../schema';

export function normalizeOptions(
  options: EntityGeneratorSchema
): NormalizedEntityGeneratorSchema {
  return { ...options, ...names(options.name) };
}
