import { toPublicKeyCredentialDescriptor } from './to-public-key-credential-descriptor';
import { isBase64URL, parseBase64URL, toBase64URL } from '../utils/index';
import { isAutocompleteAvailable } from './is-autocomplete-available';
import { getOngoingAuth, setOngoingAuth } from './on-going-auth';
import {
  AuthenticateOptions,
  AuthenticationJSON,
  WebAuthnGetOptions,
} from '../types/index';

/**
 * Signs a challenge using one of the provided credentials IDs in order to authenticate the user.
 *
 * @param {string[]} credentialIds The list of credential IDs that can be used for signing.
 * @param {string} challenge A server-side randomly generated string, the base64 encoded version will be signed.
 * @param {number} [timeout=60000] Number of milliseconds the user has to respond to the biometric/PIN check.
 * @param {'required'|'preferred'|'discouraged'} [userVerification='required'] Whether to prompt for biometric/PIN check or not.
 * @param {boolean} [conditional] Does not return directly, but only when the user has selected a credential in the input field with `autocomplete="username webauthn"`
 */
export async function authenticate(
  options: AuthenticateOptions
): Promise<AuthenticationJSON> {
  if (!isBase64URL(options.challenge))
    throw new Error('Provided challenge is not properly encoded in Base64url');

  if (options.autocomplete && !(await isAutocompleteAvailable()))
    throw new Error(
      'PAsskeys autocomplete with conditional mediation is not available in this browser.'
    );

  const authOptions: WebAuthnGetOptions = {
    challenge: parseBase64URL(options.challenge),
    rpId: options.domain ?? window.location.hostname,
    allowCredentials: options.allowCredentials?.map(
      toPublicKeyCredentialDescriptor
    ),
    hints: options.hints,
    userVerification: options.userVerification,
    timeout: options.timeout,
  };

  console.debug(authOptions);

  if (options.autocomplete) {
    const ongoingAuth = getOngoingAuth();

    if (ongoingAuth != null) ongoingAuth.abort('Cancel ongoing authentication');
    setOngoingAuth(new AbortController());
    // ongoingAuth = new AbortController();
  }

  const raw = (await navigator.credentials.get({
    publicKey: authOptions,
    mediation: options.autocomplete ? 'conditional' : undefined,
    signal: getOngoingAuth()?.signal,
  })) as PublicKeyCredential;

  if (raw.type != 'public-key') throw 'Unexpected credential type!';

  setOngoingAuth(null);
  // ongoingAuth = null;

  console.debug(raw);

  const response = raw.response as AuthenticatorAssertionResponse;

  // This should provide the same as `response.toJson()` which is sadly only available on FireFox
  const json: AuthenticationJSON = {
    clientExtensionResults: raw.getClientExtensionResults(),
    id: raw.id,
    rawId: toBase64URL(raw.rawId),
    type: raw.type,
    authenticatorAttachment:
      raw.authenticatorAttachment as AuthenticatorAttachment,
    response: {
      authenticatorData: toBase64URL(response.authenticatorData),
      clientDataJSON: toBase64URL(response.clientDataJSON),
      signature: toBase64URL(response.signature),
      userHandle: response.userHandle
        ? toBase64URL(response.userHandle)
        : undefined,
    },
  };

  return json;
}
