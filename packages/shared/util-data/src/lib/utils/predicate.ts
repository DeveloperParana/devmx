import { QueryFilter } from '@devmx/shared-api-interfaces';
import { isSameTypeof } from './is-same-typeof';
import { isTypeof } from './is-typeof';
import { entries } from './entries';
import { like } from './like';

export function predicate<T>(filter: QueryFilter<T>) {
  return (item: T) => {
    return entries(filter).every(([key, val]) => {
      const value = item[key];

      if (!value || !val) return true;

      if (isTypeof(value, 'string') && isTypeof(val, 'string')) {
        return like(value, val);
      }

      if (val instanceof RegExp && typeof value === 'string') {
        return val.test(value);
      }

      if (
        isSameTypeof(value, val, 'number') &&
        isSameTypeof(value, val, 'boolean')
      ) {
        return value === val;
      }

      if (value instanceof Date && val instanceof Date) {
        return value.getTime() === val.getTime();
      }

      return false;
    });
  };
}
