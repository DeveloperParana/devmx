import { ExtendedAuthenticatorTransport } from './extended-authenticator-transport';
import { Base64URLString } from './base64-url-string';

/**
 * A slightly-modified AuthenticatorAttestationResponse to simplify working with ArrayBuffers that
 * are Base64URL-encoded in the browser so that they can be sent as JSON to the server.
 *
 * https://w3c.github.io/webauthn/#dictdef-authenticatorattestationresponsejson
 */

export interface AuthenticatorAttestationResponseJSON {
  attestationObject: Base64URLString;
  authenticatorData: Base64URLString;
  clientDataJSON: Base64URLString;
  transports: ExtendedAuthenticatorTransport[];
  publicKey: Base64URLString;
  publicKeyAlgorithm: COSEAlgorithmIdentifier;
}
