import { PublicKeyCredentialHints } from './public-key-credential-hints';

/**
 * Extends the native DOM type since the "hints" are not yet included in the official version.
 */

export interface WebAuthnGetOptions extends PublicKeyCredentialRequestOptions {
  hints?: PublicKeyCredentialHints[];
}
