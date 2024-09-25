import { PublicKeyCredentialHints } from './public-key-credential-hints';

export interface CommonOptions {
  challenge: string;
  domain?: string;
  hints?: PublicKeyCredentialHints[];
  timeout?: number;
  userVerification?: UserVerificationRequirement;
  debug?: boolean;
}

export interface RegisterOptions extends CommonOptions {
  attestation?: boolean;
  discoverable?: ResidentKeyRequirement;
  user: string | User;
}

export interface User {
  id?: string;
  name: string;
  displayName?: string;
}
