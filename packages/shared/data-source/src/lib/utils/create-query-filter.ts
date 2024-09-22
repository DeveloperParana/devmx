import { QueryFilter } from '@devmx/shared-api-interfaces';

export const createQueryFilter = <T extends object>(
  filter: T
): QueryFilter<T> => {
  return Object.entries(filter).reduce((prev, [property, value]) => {
    return { ...prev, [property]: new RegExp(String(value), 'i') };
  }, filter);
};
