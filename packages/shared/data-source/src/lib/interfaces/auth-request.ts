import { Authentication } from '@devmx/shared-api-interfaces';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: Authentication;
}
