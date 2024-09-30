/* eslint-disable @typescript-eslint/no-explicit-any */

export function deepDiff<T extends Record<string, any>>(obj1: T, obj2: T): T {
  const result = {} as T;

  for (const key in obj1) {
    if (!(key in obj2)) {
      continue;
    } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      const nestedDiff = deepDiff(obj1[key], obj2[key]);
      if (Object.keys(nestedDiff).length > 0) {
        result[key] = nestedDiff;
      }
    } else if (obj1[key] !== obj2[key]) {
      result[key] = obj2[key];
    }
  }

  for (const key in obj2) {
    if (!(key in obj1)) {
      result[key] = obj2[key];
    }
  }

  return result;
}
