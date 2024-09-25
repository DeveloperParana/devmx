import { Base64URLString } from './base64-url-string';

/**
 * @see https://w3c.github.io/webauthn/#dictionary-client-data
 */
export interface CollectedClientData {
  type: string;
  challenge: Base64URLString;
  origin: string;
  crossOrigin?: boolean;
  topOrigin?: string;
}

export interface AuthenticatorParsed {
  rpIdHash: Base64URLString;
  flags: {
    userPresent: boolean;
    userVerified: boolean;
    backupEligibility: boolean;
    backupState: boolean;
    attestedData: boolean;
    extensionsIncluded: boolean;
  };
  signCount: number;
  aaguid: string;
  attestation?: Base64URLString;
}
