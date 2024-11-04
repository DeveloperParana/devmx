import { Authentication } from './authentication';

export interface AccessTokenPayload extends Omit<Authentication, 'id'> {
  sub: string;
  iat: number;
}
