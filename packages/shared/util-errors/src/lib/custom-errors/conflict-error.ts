import { ClientError } from '../client-error';

export class ConflictError extends ClientError<409> {
  constructor(message = 'Conflito') {
    super(message, 409, 'Conflict');
  }
}
