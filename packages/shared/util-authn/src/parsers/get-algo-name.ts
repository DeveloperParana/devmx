import { NamedAlgo } from '../types/index';

export function getAlgoName(num: COSEAlgorithmIdentifier): NamedAlgo {
  switch (num) {
    case -7:
      return 'ES256';
    case -8:
      return 'EdDSA';
    case -257:
      return 'RS256';
    default:
      throw new Error(`Unknown algorithm code: ${num}`);
  }
}
