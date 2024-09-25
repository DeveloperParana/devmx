import { Base64URLString } from '../types';
import { toBuffer } from './to-buffer';

export function parseBase64URL(txt: Base64URLString) {
  txt = txt.replaceAll('-', '+').replaceAll('_', '/'); // base64URL => base64
  return toBuffer(atob(txt));
}
