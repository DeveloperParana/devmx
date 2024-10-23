import { isTypeof } from './is-typeof';

// prettier-ignore
export function isSameTypeof(v1: unknown, v2: unknown, type: 'string'): v1 is string
// prettier-ignore
export function isSameTypeof(v1: unknown, v2: unknown, type: 'number'): v1 is number
// prettier-ignore
export function isSameTypeof(v1: unknown, v2: unknown, type: 'boolean'): v1 is boolean
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSameTypeof(v1: unknown, v2: unknown, type: any) {
  return isTypeof(v1, type) === isTypeof(v2, type);
}
