import { getAllNames } from '../../../utils';
import {
  UseCasesGeneratorSchema,
  NormalizedUseCasesGeneratorSchema,
} from '../schema';

export function normalizeOptions(
  options: UseCasesGeneratorSchema
): NormalizedUseCasesGeneratorSchema {
  const allNames = getAllNames(options.name);
  return { ...options, ...allNames };
}
