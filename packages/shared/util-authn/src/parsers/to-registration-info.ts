import { authenticator as authenticatorMetadata } from '../device/index';
import { getAlgoName } from './get-algo-name';
import {
  UserInfo,
  RegistrationInfo,
  RegistrationJSON,
  AuthenticatorParsed,
} from '../types/index';

export function toRegistrationInfo(
  registrationJson: RegistrationJSON,
  authenticator: AuthenticatorParsed
): RegistrationInfo {
  const aaguid = authenticator.aaguid;
  return {
    authenticator: {
      aaguid,
      counter: authenticator.signCount,
      icon_light:
        'https://webauthn.passwordless.id/authenticators/' +
        aaguid +
        '-light.png',
      icon_dark:
        'https://webauthn.passwordless.id/authenticators/' +
        aaguid +
        '-dark.png',
      name: authenticatorMetadata[aaguid] ?? 'Unknown',
    },
    credential: {
      id: registrationJson.id,
      publicKey: registrationJson.response.publicKey,
      algorithm: getAlgoName(registrationJson.response.publicKeyAlgorithm),
      transports: registrationJson.response.transports,
    },
    synced: authenticator.flags.backupEligibility,
    user: registrationJson.user as UserInfo, // That's specific to this library
    userVerified: authenticator.flags.userVerified,
  };
}
