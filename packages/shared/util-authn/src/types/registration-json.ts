import { RegistrationResponseJSON } from './registration-response-json';
import { User } from './common-options';

/********************************** JSON PAYLOADS **********************/

export interface RegistrationJSON extends RegistrationResponseJSON {
  user: User; // Added by this library, not by the WebAuthn protocol
}
