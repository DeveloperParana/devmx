import { isTypeof } from './is-typeof';
import { keys } from './keys';

export function deepMerge<T>(o1: T, o2: Partial<T>): T {
  return keys(o2).reduce(
    (acc, key) => {
      const o1Value = acc[key];
      const o2Value = o2[key];

      if (Array.isArray(o1Value) && Array.isArray(o2Value)) {
        acc[key] = o2Value as T[keyof T];
      } else if (o2Value instanceof Date) {
        acc[key] = o2Value as T[keyof T];
      } else if (isTypeof(o1Value, 'object') && isTypeof(o2Value, 'object')) {
        acc[key] = deepMerge(o1Value, o2Value);
      } else {
        acc[key] = o2Value as T[keyof T];
      }

      return acc;
    },
    { ...o1 }
  );
}
