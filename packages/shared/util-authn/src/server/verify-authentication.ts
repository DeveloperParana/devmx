import { SHA256, toBase64URL, toBuffer } from '../utils/index';
import { verifySignature } from './verify-signature';
import { isNotValid } from './is-not-valid';
import {
  parseClient,
  parseAuthenticator,
  toAuthenticationInfo,
} from '../parsers/index';
import {
  Fn,
  CredentialInfo,
  AuthenticationInfo,
  AuthenticationJSON,
  AuthenticatorParsed,
  CollectedClientData,
} from '../types/index';

interface AuthenticationChecks {
  challenge: string | Fn;
  origin: string | Fn;
  userVerified: boolean;
  counter?: number; // Made optional according to https://github.com/passwordless-id/webauthn/issues/38
  domain?: string; // Same as `rp.id`
  verbose?: boolean;
}

export async function verifyAuthentication(
  authenticationJson: AuthenticationJSON,
  credential: CredentialInfo,
  expected: AuthenticationChecks
): Promise<AuthenticationInfo> {
  if (authenticationJson.id !== credential.id)
    throw new Error(
      `Credential ID mismatch: ${authenticationJson.id} vs ${credential.id}`
    );

  const isValidSignature: boolean = await verifySignature({
    algorithm: credential.algorithm,
    publicKey: credential.publicKey,
    authenticatorData: authenticationJson.response.authenticatorData,
    clientData: authenticationJson.response.clientDataJSON,
    signature: authenticationJson.response.signature,
    verbose: expected.verbose,
  });

  if (!isValidSignature)
    throw new Error(
      `Invalid signature: ${authenticationJson.response.signature}`
    );

  const client: CollectedClientData = parseClient(
    authenticationJson.response.clientDataJSON
  );
  const authenticator: AuthenticatorParsed = parseAuthenticator(
    authenticationJson.response.authenticatorData
  );

  if (expected.verbose) {
    console.debug(client);
    console.debug(authenticator);
  }

  if (client.type !== 'webauthn.get')
    throw new Error(`Unexpected clientData type: ${client.type}`);

  if (await isNotValid(expected.origin, client.origin))
    throw new Error(`Unexpected ClientData origin: ${client.origin}`);

  if (await isNotValid(expected.challenge, client.challenge))
    throw new Error(`Unexpected ClientData challenge: ${client.challenge}`);

  // this only works because we consider `rp.origin` and `rp.id` to be the same during authentication/registration
  const rpId = expected.domain ?? new URL(client.origin).hostname;
  const expectedRpIdHash = toBase64URL(await SHA256(toBuffer(rpId)));
  if (authenticator.rpIdHash !== expectedRpIdHash)
    throw new Error(
      `Unexpected RpIdHash: ${authenticator.rpIdHash} vs ${expectedRpIdHash}`
    );

  if (!authenticator.flags.userPresent)
    throw new Error(`Unexpected authenticator flags: missing userPresent`);

  if (!authenticator.flags.userVerified && expected.userVerified)
    throw new Error(`Unexpected authenticator flags: missing userVerified`);

  if (expected.counter && authenticator.signCount <= expected.counter)
    throw new Error(
      `Unexpected authenticator counter: ${authenticator.signCount} (should be > ${expected.counter})`
    );

  return toAuthenticationInfo(authenticationJson, authenticator);
}
