import { ClientError } from '../client-error';

export class PersistenceError extends ClientError<422> {
  constructor(message = 'Algo deu errado ao persistir os dados') {
    super(message, 422, 'Unprocessable Entity');
  }
}
