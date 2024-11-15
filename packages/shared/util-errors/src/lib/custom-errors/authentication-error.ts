import { ClientError } from '../client-error';

export class AuthenticationError extends ClientError<401> {
  constructor(message = 'Não autorizado') {
    super(message, 401, 'Unauthorized');
  }
}
