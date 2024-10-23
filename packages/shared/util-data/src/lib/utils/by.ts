export function by<T, K extends keyof T>(key: K, val: T[K]) {
  return (item: T) => item[key] === val;
}
