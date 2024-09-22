import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AccessTokenPayload, AuthUser } from '@devmx/shared-api-interfaces';
import { AuthRequest } from '../../accounts/interfaces';

export const User = createParamDecorator(
  (prop: keyof AuthUser, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<AuthRequest>();
    return prop ? request.user[prop] : request.user;
  }
);
