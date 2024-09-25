export function parseBuffer(buffer: ArrayBuffer) {
  return String.fromCharCode(...new Uint8Array(buffer));
}
