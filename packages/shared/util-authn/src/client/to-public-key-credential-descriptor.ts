import { Base64URLString, CredentialDescriptor } from '../types/index';
import { parseBase64URL } from '../utils/index';

export function toPublicKeyCredentialDescriptor(
  cred: Base64URLString | CredentialDescriptor
): PublicKeyCredentialDescriptor {
  if (typeof cred === 'string') {
    return {
      id: parseBase64URL(cred),
      type: 'public-key',
    };
  } else {
    return {
      id: parseBase64URL(cred.id),
      type: 'public-key',
      transports: cred.transports as AuthenticatorTransport[],
    };
  }
}
