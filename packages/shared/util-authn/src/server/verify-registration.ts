import { Fn, RegistrationInfo, RegistrationJSON } from '../types/index';
import { isNotValid } from './is-not-valid';
import {
  parseClient,
  parseAuthenticator,
  toRegistrationInfo,
} from '../parsers/index';

interface RegistrationChecks {
  challenge: string | Fn;
  origin: string | Fn;
}

export async function verifyRegistration(
  registrationJson: RegistrationJSON,
  expected: RegistrationChecks
): Promise<RegistrationInfo> {
  const client = parseClient(registrationJson.response.clientDataJSON);
  const authenticator = parseAuthenticator(
    registrationJson.response.authenticatorData
  );
  const aaguid = authenticator.aaguid;

  if (!aaguid)
    // should never happen, worst case should be a fallback to "zeroed" aaguid
    throw new Error('Unexpected errror, no AAGUID.');

  if (client.type !== 'webauthn.create')
    throw new Error(`Unexpected ClientData type: ${client.type}`);

  if (await isNotValid(expected.origin, client.origin))
    throw new Error(`Unexpected ClientData origin: ${client.origin}`);

  if (await isNotValid(expected.challenge, client.challenge))
    throw new Error(`Unexpected ClientData challenge: ${client.challenge}`);

  return toRegistrationInfo(registrationJson, authenticator);
}
