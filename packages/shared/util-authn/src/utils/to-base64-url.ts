import { Base64URLString } from '../types';
import { parseBuffer } from './parse-buffer';

export function toBase64URL(buffer: ArrayBuffer): Base64URLString {
  const txt = btoa(parseBuffer(buffer)); // base64
  return txt.replaceAll('+', '-').replaceAll('/', '_');
}
