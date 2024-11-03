import { QueryFilter } from '@devmx/shared-api-interfaces';
import { RootFilterQuery } from 'mongoose';
import { objectId } from './object-id';

export function createQueryFilterIn<T, P extends keyof T>(
  filter: QueryFilter<T>,
  property: P,
  ...values: string[]
): RootFilterQuery<T> {
  const $in = values.map((id) => objectId(id));
  return { ...filter, [property]: { $in } };
}
