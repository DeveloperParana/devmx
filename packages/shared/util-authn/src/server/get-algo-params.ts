import { NamedAlgo } from '../types/index';

/**
 * Os agentes de usuário DEVEM ser capazes de retornar um valor não nulo para `getPublicKey()` quando a chave pública em `credencial` tiver um valor `COSEAlgorithmIdentifier` de:
 *
 * `-7` (`ES256`), onde `kty` é `2` (com pontos não compactados) e `crv` é `1` (`P-256`).
 *
 * `-257` (`RS256`).
 *
 * `-8` (`EdDSA`), onde `crv` é `6` (`Ed25519`).
 *
 * @see https://w3c.github.io/webauthn/#sctn-public-key-easy
 *
 * @see https://www.iana.org/assignments/cose/cose.xhtml#algorithms
 *
 */
export function getAlgoParams(algorithm: NamedAlgo) {
  switch (algorithm) {
    case 'RS256':
      return {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      };
    case 'ES256':
      return {
        name: 'ECDSA',
        namedCurve: 'P-256',
        hash: 'SHA-256',
      };
    // case 'EdDSA': Not supported by browsers
    default:
      throw new Error(
        `Unknown or unsupported crypto algorithm: ${algorithm}. Only 'RS256' and 'ES256' are supported.`
      );
  }
}
