/**
 * The available "hints" for WebAuthn, not yet available in the official DOM types
 */

export type PublicKeyCredentialHints =
  | 'client-device'
  | 'hybrid'
  | 'security-key';
