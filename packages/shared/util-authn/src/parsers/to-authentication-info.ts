import {
  AuthenticationJSON,
  AuthenticatorParsed,
  AuthenticationInfo,
} from '../types/index';

export function toAuthenticationInfo(
  authenticationJson: AuthenticationJSON,
  authenticator: AuthenticatorParsed
): AuthenticationInfo {
  return {
    credentialId: authenticationJson.id,
    userId: authenticationJson.response.userHandle,
    counter: authenticator.signCount,
    userVerified: authenticator.flags.userVerified,
    authenticatorAttachment: authenticationJson.authenticatorAttachment,
  };
}
