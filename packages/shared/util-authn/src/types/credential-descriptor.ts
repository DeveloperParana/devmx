import { ExtendedAuthenticatorTransport } from './extended-authenticator-transport';
import { Base64URLString } from './base64-url-string';
import { CommonOptions } from './common-options';

/**
 * @see PublicKeyCredentialDescriptor
 */

export interface CredentialDescriptor {
  id: Base64URLString;
  transports: ExtendedAuthenticatorTransport[];
}

export interface AuthenticateOptions extends CommonOptions {
  allowCredentials?: (CredentialDescriptor | string)[];
  autocomplete?: boolean;
}
