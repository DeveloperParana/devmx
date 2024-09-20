import { AccessTokenPayload } from './access-token-payload.interface';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: AccessTokenPayload;
}
