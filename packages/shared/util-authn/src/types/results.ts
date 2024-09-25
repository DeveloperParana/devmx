import { ExtendedAuthenticatorTransport } from './extended-authenticator-transport';
import { Base64URLString } from './base64-url-string';
import { NamedAlgo } from './named-algo';

/**
 * @see https://w3c.github.io/webauthn/#sctn-authenticator-data
 */

export interface RegistrationInfo {
  user: UserInfo;
  credential: CredentialInfo;
  authenticator: AuthenticatorInfo;
  synced: boolean;
  userVerified: boolean;
}

export interface AuthenticationInfo {
  credentialId: Base64URLString;
  userId?: Base64URLString;
  userVerified: boolean;
  counter: number;
  authenticatorAttachment?: AuthenticatorAttachment;
}

export interface UserInfo {
  id: string;
  name: string;
  displayName: string;
}

export interface CredentialInfo {
  id: string;
  publicKey: string;
  algorithm: NamedAlgo;
  transports: ExtendedAuthenticatorTransport[];
}

export interface AuthenticatorInfo {
  aaguid: string;
  name: string;
  icon_light: string;
  icon_dark: string;
  counter: number;
}
