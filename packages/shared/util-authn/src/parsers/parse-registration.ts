import { RegistrationJSON, RegistrationInfo } from '../types/index';
import { toRegistrationInfo } from './to-registration-info';
import { parseAuthenticator } from './parse-authenticator';

export function parseRegistration(
  registrationJson: RegistrationJSON
): RegistrationInfo {
  const authenticator = parseAuthenticator(
    registrationJson.response.authenticatorData
  );
  return toRegistrationInfo(registrationJson, authenticator);
}
