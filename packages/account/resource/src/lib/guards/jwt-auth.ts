import { IS_ALLOWED_KEY } from '@devmx/shared-data-source';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  override canActivate(context: ExecutionContext) {
    if (this.isAllowed(context)) {
      return true;
    }

    return super.canActivate(context);
  }

  isAllowed(context: ExecutionContext) {
    const metaKey = IS_ALLOWED_KEY;
    const targets = [context.getHandler(), context.getClass()];
    return this.reflector.getAllAndOverride<boolean>(metaKey, targets);
  }

  override handleRequest<Authentication>(err: Error, user: Authentication) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
