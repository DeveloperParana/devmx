import { Base64URLString } from '../types';
import { toBase64URL } from '../utils/index';

export function extractRpIdHash(authData: ArrayBuffer): Base64URLString {
  return toBase64URL(authData.slice(0, 32));
}
