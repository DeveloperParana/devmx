import {
  RequestError,
  NotFoundError,
  PersistenceError,
  AccessDeniedError,
  AuthenticationError,
} from './custom-errors';

describe('Custom errors', () => {
  it('request error', () => {
    const error = new RequestError();

    expect(error.code).toBe(400);
    expect(error.name).toBe('Bad Request');
  });

  it('authentication error', () => {
    const error = new AuthenticationError();

    expect(error.code).toBe(401);
    expect(error.name).toBe('Unauthorized');
  });

  it('access denied error', () => {
    const error = new AccessDeniedError();

    expect(error.code).toBe(403);
    expect(error.name).toBe('Forbidden');
  });

  it('not found error', () => {
    const error = new NotFoundError();

    expect(error.code).toBe(404);
    expect(error.name).toBe('Not Found');
  });

  it('persistence error', () => {
    const error = new PersistenceError();

    expect(error.code).toBe(422);
    expect(error.name).toBe('Unprocessable Entity');
  });
});
