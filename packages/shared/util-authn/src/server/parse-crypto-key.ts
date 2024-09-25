import { parseBase64URL } from '../utils/index';
import { subtle } from 'crypto';

type AlgoParams =
  | AlgorithmIdentifier
  | RsaHashedImportParams
  | EcKeyImportParams
  | HmacImportParams
  | AesKeyAlgorithm;

export async function parseCryptoKey(
  algoParams: AlgoParams,
  publicKey: string
) {
  return subtle.importKey(
    'spki',
    parseBase64URL(publicKey),
    algoParams,
    false,
    ['verify']
  );
}
