import { AuthenticatorAttestationResponseJSON } from './authenticator-attestation-response-json';
import { Base64URLString } from './base64-url-string';

/**
 * https://w3c.github.io/webauthn/#dictdef-registrationresponsejson
 */

export interface RegistrationResponseJSON {
  /** The credential ID */
  id: Base64URLString;
  /** The credential ID */
  rawId: Base64URLString;
  response: AuthenticatorAttestationResponseJSON;
  authenticatorAttachment?: AuthenticatorAttachment;
  clientExtensionResults: AuthenticationExtensionsClientOutputs;
  type: PublicKeyCredentialType;
}
