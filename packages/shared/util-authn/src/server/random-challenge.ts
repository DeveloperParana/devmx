import { toBase64URL } from '../utils/index';
import { getRandomValues } from 'crypto';

export function randomChallenge() {
  /**
   * > 128 bits, um múltiplo de 3 bytes para ter codificação base64 sem preenchimento
   */
  return toBase64URL(getRandomValues(new Uint8Array(18)));
}
