export function sameKeys<T extends string>(arr1: T[], arr2: T[]) {
  return arr1.length === arr2.length && arr1.every((key) => arr2.includes(key));
}
