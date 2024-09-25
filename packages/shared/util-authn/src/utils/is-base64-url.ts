export function isBase64URL(txt: string) {
  return txt.match(/^[a-zA-Z0-9\-_]+=*$/) !== null;
}
