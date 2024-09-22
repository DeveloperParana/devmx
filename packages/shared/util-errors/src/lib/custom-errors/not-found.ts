import { ClientError } from '../client-error';

export class NotFoundError extends ClientError<404> {
  constructor(message = 'Entidade não foi encontrada') {
    super(message, 404, 'Not Found');
  }
}
