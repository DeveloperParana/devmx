import { Base64URLString, CollectedClientData } from '../types/index';
import { utf8Decoder } from './utf8-decoder';
import { parseBase64URL } from '../utils/index';

export function parseClient(
  data: Base64URLString | ArrayBuffer
): CollectedClientData {
  if (typeof data == 'string') data = parseBase64URL(data);
  return JSON.parse(utf8Decoder.decode(data));
}
