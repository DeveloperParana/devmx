export function toBuffer(txt: string): ArrayBuffer {
  return Uint8Array.from(txt, (c) => c.charCodeAt(0)).buffer;
}
