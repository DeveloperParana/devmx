export function toBase64(type: string, content: string) {
  return `data:${type};base64,${content}`;
}
