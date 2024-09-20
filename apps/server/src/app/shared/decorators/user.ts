import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AccessTokenPayload, AuthRequest } from '../../accounts/interfaces';

export const User = createParamDecorator(
  (prop: keyof AccessTokenPayload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<AuthRequest>();
    return prop ? request.user[prop] : request.user;
  }
);
