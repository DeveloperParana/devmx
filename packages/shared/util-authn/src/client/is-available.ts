/**
 * Verifica suporte pra autenticação sem senha
 */
export function isAvailable() {
  return 'PublicKeyCredential' in window;
}
