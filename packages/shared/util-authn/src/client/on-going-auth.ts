/**
 * Para autocomplete / mediação condicional, a "autenticação" em andamento deve ser abortada ao disparar um registro.
 *
 * Ela também deve ser abortada ao disparar a autenticação outra vez.
 */
let ongoingAuth: AbortController | null = null;

export function setOngoingAuth(value: AbortController | null) {
  ongoingAuth = value;
}

export function getOngoingAuth() {
  return ongoingAuth;
}
