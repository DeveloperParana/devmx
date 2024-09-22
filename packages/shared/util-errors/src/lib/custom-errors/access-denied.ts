import { ClientError } from '../client-error';

export class AccessDeniedError extends ClientError<403> {
  constructor(message = 'Acesso negado') {
    super(message, 403, 'Forbidden');
  }
}
