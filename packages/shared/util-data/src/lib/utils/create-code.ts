export function createCode(length = 4) {
  return Math.random()
    .toString(36)
    .slice(2, length + 2)
    .toUpperCase();
}
