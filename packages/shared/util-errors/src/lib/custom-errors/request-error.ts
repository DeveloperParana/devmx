import { ClientError } from '../client-error';

export class RequestError extends ClientError<400> {
  constructor(message = 'Solicitação incorreta') {
    super(message, 400, 'Bad Request');
  }
}
