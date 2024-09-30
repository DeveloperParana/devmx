import { entries } from './entries';

export function createParams<T extends object>(data: T) {
  const params = new URLSearchParams();

  for (const [key, value] of entries(data)) {
    params.set(key.toString(), String(value));
  }

  return params;
}
