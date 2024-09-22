import { AuthRequest, IS_ALLOWED_KEY } from '@devmx/shared-data-source';
import { Env } from '@devmx/shared-api-interfaces/server';
import { AuthUser } from '@devmx/shared-api-interfaces';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private env: Env
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isAllowed(context)) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthRequest>();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      request['user'] = await this.verify(token);
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private verify(token: string) {
    const options = { secret: this.env.jwt.secret };
    return this.jwtService.verifyAsync<AuthUser>(token, options);
  }

  private isAllowed(context: ExecutionContext) {
    const metaKey = IS_ALLOWED_KEY;
    const targets = [context.getHandler(), context.getClass()];
    return this.reflector.getAllAndOverride<boolean>(metaKey, targets);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
