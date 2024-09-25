export function merge<T extends object>(source: T, target: Partial<T>) {
  return Object.assign({}, source, target);
}
