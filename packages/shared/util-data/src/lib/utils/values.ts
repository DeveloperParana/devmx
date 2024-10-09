export function values<T extends object, K extends keyof T>(data: T) {
  return Object.values(data) as T[K][];
}
