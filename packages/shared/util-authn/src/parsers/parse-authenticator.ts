import { Base64URLString, AuthenticatorParsed } from '../types/index';
import { extractRpIdHash } from './extract-rp-id-hash';
import { extractAaguid } from './extract-aaguid';
import { parseBase64URL } from '../utils/index';

export function parseAuthenticator(
  authData: Base64URLString | ArrayBuffer
): AuthenticatorParsed {
  if (typeof authData == 'string') authData = parseBase64URL(authData);

  console.debug(authData)

  const flags = new DataView(authData.slice(32, 33)).getUint8(0);

  console.debug(flags)

  // https://w3c.github.io/webauthn/#sctn-authenticator-data
  return {
    rpIdHash: extractRpIdHash(authData),
    flags: {
      userPresent: !!(flags & 1),
      //reserved1: !!(flags & 2),
      userVerified: !!(flags & 4),
      backupEligibility: !!(flags & 8),
      backupState: !!(flags & 16),
      //reserved2: !!(flags & 32),
      attestedData: !!(flags & 64),
      extensionsIncluded: !!(flags & 128),
    },
    signCount: new DataView(authData.slice(33, 37)).getUint32(0, false), // Big-Endian!
    aaguid: extractAaguid(authData),
    //credentialId: extractCredentialId()
  };
}
