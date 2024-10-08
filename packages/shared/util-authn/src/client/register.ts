import {
  isBase64URL,
  parseBase64URL,
  toBase64URL,
  toBuffer,
} from '../utils/index';
import { getOngoingAuth, setOngoingAuth } from './on-going-auth';
import { getAuthAttachment } from './get-auth-attachment';
import {
  User,
  RegisterOptions,
  RegistrationJSON,
  WebAuthnCreateOptions,
} from '../types/index';

export async function register(
  options: RegisterOptions
): Promise<RegistrationJSON> {
  if (!options.challenge) throw new Error('"challenge" required');

  if (!options.user) throw new Error('"user" required');

  if (!isBase64URL(options.challenge))
    throw new Error('Provided challenge is not properly encoded in Base64url');

  const user: User =
    typeof options.user === 'string' ? { name: options.user } : options.user;
  if (!user.id) user.id = crypto.randomUUID();

  const creationOptions: WebAuthnCreateOptions = {
    challenge: parseBase64URL(options.challenge),
    rp: {
      id: options.domain ?? window.location.hostname,
      name: options.domain ?? window.location.hostname,
    },
    user: {
      id: toBuffer(user.id),
      name: user.name,
      displayName: user.displayName ?? user.name,
    },
    hints: options.hints,
    pubKeyCredParams: [
      { alg: -7, type: 'public-key' }, // ES256 (Webauthn's default algorithm)
      { alg: -257, type: 'public-key' }, // RS256 (for older Windows Hello and others)
    ],
    timeout: options.timeout,
    authenticatorSelection: {
      userVerification: options.userVerification,
      authenticatorAttachment: getAuthAttachment(options.hints),
      residentKey: options.discoverable ?? 'preferred', // see https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey
      requireResidentKey: options.discoverable === 'required', // mainly for backwards compatibility, see https://www.w3.org/TR/webauthn/#dictionary-authenticatorSelection
    },
    attestation: 'direct',
  };

  console.debug(creationOptions);

  const ongoingAuth = getOngoingAuth();

  if (ongoingAuth != null) ongoingAuth.abort('Cancel ongoing authentication');
  setOngoingAuth(new AbortController());
  // ongoingAuth = new AbortController();

  const raw = (await navigator.credentials.create({
    publicKey: creationOptions,
    signal: ongoingAuth?.signal,
  })) as PublicKeyCredential;
  const response = raw.response as AuthenticatorAttestationResponse;

  setOngoingAuth(null);
  // ongoingAuth = null;

  console.debug(raw);

  if (raw.type != 'public-key') throw 'Unexpected credential type!';

  const publicKey = response.getPublicKey();
  if (!publicKey) throw 'Non-compliant browser or authenticator!';

  // This should provide the same as `response.toJson()` which is sadly only available on FireFox
  const json: RegistrationJSON = {
    type: raw.type,
    id: raw.id,
    rawId: toBase64URL(raw.rawId), // Same as ID, but useful in tests
    authenticatorAttachment:
      raw.authenticatorAttachment as AuthenticatorAttachment,
    clientExtensionResults: raw.getClientExtensionResults(),
    response: {
      attestationObject: toBase64URL(response.attestationObject),
      authenticatorData: toBase64URL(response.getAuthenticatorData()),
      clientDataJSON: toBase64URL(response.clientDataJSON),
      publicKey: toBase64URL(publicKey),
      publicKeyAlgorithm: response.getPublicKeyAlgorithm(),
      transports: response.getTransports() as AuthenticatorTransport[],
    },
    user, // That's our own addition
  };
  return json;
}
