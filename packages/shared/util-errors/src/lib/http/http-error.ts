export abstract class HttpError {
  readonly name = 'HttpErrorResponse'
  abstract readonly message: string;
  abstract readonly error: Error;
}
