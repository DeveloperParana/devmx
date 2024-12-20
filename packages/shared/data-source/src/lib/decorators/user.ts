import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Authentication } from '@devmx/shared-api-interfaces';
import { AuthRequest } from '../interfaces';

export const User = createParamDecorator(
  (prop: keyof Authentication, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<AuthRequest>();
    return prop ? request.user[prop] : request.user;
  }
);
