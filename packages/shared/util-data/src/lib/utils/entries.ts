export function entries<T extends object, K extends keyof T>(data: T) {
  return Object.entries(data) as [K, T[K]][];
}
