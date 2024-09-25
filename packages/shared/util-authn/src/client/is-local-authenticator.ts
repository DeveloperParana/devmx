/**
 * Verifica se o próprio dispositivo pode ser usado como autenticador
 */
export async function isLocalAuthenticator() {
  return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
}
