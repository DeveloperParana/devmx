import { ClientError } from '../client-error';

export class AuthenticationError extends ClientError<401> {
  constructor(message = 'Não autenticado') {
    super(message, 401, 'Unauthorized');
  }
}
