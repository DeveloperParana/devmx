/**
 * WebAuthn added transports that are not yet defined in the DOM definitions.
 * However, it's partly obsoleted by the `hints` in the registration/authentication request.
 *
 * Apesar de 'smart-card' estar presente na especificação, as definições
 * DOM oferecidas no TypeScript (lib.dom.d.ts) não possui 'smart-card'.
 *
 * Entretanto, esse tipo de dispositivo vem sendo amplamente substituído
 * por outros mais modernos e, por isso vem se tornando obsoleto.
 *
 * @see https://w3c.github.io/webauthn/#enumdef-authenticatortransport
 */

export type ExtendedAuthenticatorTransport =
  | AuthenticatorTransport
  | 'smart-card'; // missing in the current DOM types
