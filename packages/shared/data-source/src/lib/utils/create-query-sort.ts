import { QuerySort } from '@devmx/shared-api-interfaces';

export const createQuerySort = <T extends object>(
  filter: T
): QuerySort<T> => {
  return Object.entries(filter).reduce((prev, [property, value]) => {
    return { ...prev, [property]: value === 'asc' ? 1 : 0 };
  }, filter);
};
