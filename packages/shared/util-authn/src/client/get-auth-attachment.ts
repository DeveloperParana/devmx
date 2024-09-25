import { PublicKeyCredentialHints } from "../types/index";

/**
 * Antes que "hints" existissem, o "authenticatorAttachment" era o caminho a seguir.
 */
export function getAuthAttachment(
  hints?: PublicKeyCredentialHints[]): AuthenticatorAttachment | undefined {
  if (!hints || hints.length === 0) return undefined; // The webauthn protocol considers `null` as invalid but `undefined` as "both"!

  if (hints.includes('client-device')) {
    if (hints.includes('security-key') || hints.includes('hybrid'))
      return undefined; // both
    else return 'platform';
  }

  return 'cross-platform';
}
